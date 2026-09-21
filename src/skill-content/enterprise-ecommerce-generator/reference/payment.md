---
name: payment
description: |
  你负责生成nest后端项目中的支付模块，需要调用你的时候，你就将下面的代码加载到项目之中
language: zh-CN
---



## 加载规则

你不能直接复制粘贴，要注意路径写法，避免报错



## 完整代码如下

##### payment.controller.ts

```typescript
// 支付回调（必须）
import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PrismaService } from '../prisma/prisma.service';

@Controller('payment')
export class PaymentController {
  constructor(
    private paymentService: PaymentService,
    private prisma: PrismaService
  ) {}

  @Post('callback')
  async callback(@Body() body: any) {
    // 1️⃣ 验签
    if (!this.paymentService.verifySign(body)) {
      throw new Error('签名校验失败');
    }

    // 2️⃣ 更新订单
    if (body.status === 'SUCCESS') {
      await this.prisma.order.update({
        where: { orderNo: body.mchOrderNo },
        data: { status: 'PAID' }
      });
    }

 
```

##### payment.module.ts

```typescript
import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Module({
  providers: [PaymentService],
  exports: [PaymentService]
})
export class PaymentModule {}
```

##### payment.service.ts

```typescript
// 支付 Service（只管支付）
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PAYMENT_CONFIG } from '../config/payment.config';
import { generateSign } from './payment.util';

@Injectable()
export class PaymentService {
  async createPayOrder(params: {
    mchOrderNo: string;
    amount: string;
    accountName: string;
    email: string;
    phone: string;
    callbackUrl: string;
    subject: string;
  }) {
    const reqTime = Math.floor(Date.now() / 1000).toString();

    const requestParams: any = {
      // 公共参数
      mchNo: PAYMENT_CONFIG.mchNo,
      reqTime,
      version: PAYMENT_CONFIG.version,
      signType: PAYMENT_CONFIG.signType,

      // 业务参数
      ...params
    };

    requestParams.sign = generateSign(
      requestParams,
      PAYMENT_CONFIG.apiKey
    );
    console.log('requestParams------------------------', requestParams);
    // let test = {
    //   mchNo: 'e385d3a1-f56d-46d5-b10d-ea3d953eabc1',
    //   reqTime: '1769250752',
    //   version: '2.0',
    //   signType: 'MD5',
    //   mchOrderNo: 'ORD17692507527982',
    //   amount: '170.15',
    //   accountName: 'John Doe',
    //   email: '123@qq.com',
    //   phone: '1229345932',
    //   callbackUrl: 'https://your-domain.com/payment/callback',
    //   subject: 'member',
    //   sign: 'BDCFF4399E9BE6267BB1EC6BD5C4E01C'
    // }
    const response = await axios.post(
      `${PAYMENT_CONFIG.baseUrl}/api/v2/payin/createOrder`,
      requestParams,
      // test,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.error('Insppay报错', response);
    return response.data;
  }

  verifySign(data: any): boolean {
    const sign = data.sign;
    const localSign = generateSign(data, PAYMENT_CONFIG.apiKey);
    return sign === localSign;
  }
}

```

##### payment.util.ts

```typescript
import * as crypto from 'crypto';

/**
 * 生成 Insppay 签名
 * @param params 请求参数对象
 * @param apiKey 商户 API Key
 */
export function generateSign(
  params: Record<string, any>,
  apiKey: string
): string {
  // 1. 筛选非空参数（不含 sign）
  const filteredKeys = Object.keys(params)
    .filter(key => key !== 'sign' && params[key] !== undefined && params[key] !== null && params[key] !== '')
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())); // 按 Python str.lower 排序
  console.log('筛选后的参数:', filteredKeys); // 可打印调试
  
  // 2. 拼接 key=value
  const stringA = filteredKeys
    .map(key => `${key}=${params[key]}`)
    .join('&');
  console.log('拼接后的字符串:', stringA); // 可打印调试
  
  // 3. 拼接 &key=apiKey
  const stringSignTemp = `${stringA}&key=${apiKey}`;

  console.log('待签名字符串:', stringSignTemp); // 可打印调试
  console.log('生成的签名:', crypto.createHash('md5').update(stringSignTemp, 'utf8').digest('hex').toUpperCase()); // 可打印调试
  
  // 4. MD5 -> 大写
  return crypto
    .createHash('md5')
    .update(stringSignTemp, 'utf8')
    .digest('hex')
    .toUpperCase();
}

```



## payment.config.ts

```typescript
export const PAYMENT_CONFIG = {
  mchNo: process.env.INSPPAY_MCH_NO || '你的商户号',
  apiKey: process.env.INSPPAY_API_KEY || '你的商户私钥',
  baseUrl: 'https://www.insppay.com',
  version: '2.0',
  signType: 'MD5'
};
```



