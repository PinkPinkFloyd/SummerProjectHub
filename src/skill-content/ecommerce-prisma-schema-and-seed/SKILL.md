---
name: ecommerce-prisma-schema-and-seed
version: 2.0.0
description: |
  基于固定电商核心模型，结合指定电商参考网站动态建模商品结构，
  同时从 Unsplash 抓取图片并生成可直接导入数据库的 SQL 种子数据。
language: zh-CN
scope:
  - codegen
  - database
  - prisma
  - web-inspection
  - data-seeding
tools:
  - web-fetch
  - web-search
---

## 技能目标（Purpose）

本技能用于 **一次性生成完整的电商数据库基础资产**，包括：

1. **schema.prisma**
   - 固定交易模型完全复用
   - 商品与商品规格模型基于参考网站动态生成
2. **SQL 种子数据文件**
   - 至少 30 个商品
   - 包含分类、商品、规格、图片
   - 图片来源于 Unsplash，直接使用 URL

输出结果可直接用于：

- NestJS + Prisma 项目
- 本地 / 测试环境数据库初始化

---

## 固定模型（Strict Reuse Models）

以下模型 **必须严格使用既定示例结构**，不允许任何修改：

- User
- Cart
- CartItem
- Order
- OrderItem
- PaymentLog
- Category
- ProductImage

规则：

- 字段名、类型、关系必须与示例完全一致
- 仅允许被其他模型引用
- 不允许新增字段

---

## 动态模型（Adaptive Models）

以下模型需根据参考电商网站 **动态推断字段结构**：

- Product
- ProductVariant

动态分析内容包括：

- 商品核心字段（名称、描述、价格形态）
- 是否存在多规格（尺寸 / 颜色 / 组合）
- 规格是强结构（SKU）还是弱结构（属性）

建模原则：

- 优先关系型建模
- 无法结构化的属性允许使用 Json
- 不强行复制前端字段名，需语义化设计

---

## 输入规范（Input）

### 必需输入

1. **参考电商网站 URL**
2. **Unsplash 搜索关键词基准**

### 示例输入

​    参考网站：https://byshree.com/，这是印度服装电商，Unsplash 关键词基于分类名称生成，在当前目录下给我生成schema.prisma以及可导入mysql数据库的sql脚本

---

## 网站分析规则（Reference Site Inspection）

当输入包含参考网站 URL 时，必须：

1. 实际访问网站页面
2. 至少分析：
   - 首页商品列表
   - 至少一个分类页
   - 至少一个商品详情页
3. 提取以下信息：
   - 分类层级与名称
   - 商品展示字段
   - 商品规格形式
   - 图片数量与展示方式

禁止：

- 在未访问网站的情况下假设商品结构
- 直接套用通用电商字段模板

---

## Unsplash 图片爬取规则（Image Sourcing）

- 图片来源：https://unsplash.com/s/photos/{keyword}
- keyword 规则：
  - 基于分类名或商品类型生成
  - 使用英文单数名词
- 每个商品至少 1 张图片
- 图片字段仅存储 URL，不下载图片文件

---

## SQL 种子数据生成规则（Seed Data）

### 数据量要求

- Category：按参考网站生成
- Product：≥ 30 条
- Product/ProductVariant：产品价格/金额使用印度卢比
- ProductVariant：
  - 若网站支持多规格，必须生成
  - 每个商品至少 2条
- ProductImage：
  - 与 Product 关联
  - 使用 Unsplash 图片 URL

### SQL 约束

- SQL 文件可直接执行
- 插入顺序需满足外键依赖：
  1. Category
  2. Product
  3. ProductVariant
  4. ProductImage
- 使用明确字段名插入（禁止 `INSERT INTO table VALUES (...)`）

---

## 输出规范（Output）

### 输出内容（顺序固定）

1. `schema.prisma`
2. 空行
3. `-- seed.sql`
4. SQL 插入脚本

### 输出限制

- 不输出解释性文字
- 不输出 Markdown
- 不输出日志或调试信息

---

## Prisma 建模约束（Prisma Constraints）

- Prisma 版本：5.22.0
- 数据库：MySQL
- 金额字段：Decimal @db.Decimal(10, 2)
- 时间字段：createdAt：`@default(now())`  updatedAt：`@updatedAt`

---

## 行为约束（Behavior）

- 不生成 enum
- 不生成软删除字段
- 不引入促销、库存流水、优惠券等扩展模型
- 不生成与参考网站无关的商品字段

---

## 降级策略（Fallback）

当出现以下情况之一：

- 网站强依赖 JS
- 商品详情无法完整抓取
- 规格结构不明确

允许：

- 采用最小可用商品结构
- 使用 Json 字段承载不确定属性
- 保证 schema 与 SQL 可执行

---

## 完成条件（Completion）

当以下内容全部输出后，技能执行完成：

- 完整 `schema.prisma`
- ≥30 条商品的 SQL 种子数据
- 外键关系正确、可导入

## 示例

schema.prisma:

```
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  orders    Order[]
  cart      Cart?
}

model Category {
  id       Int       @id @default(autoincrement())
  name     String    @unique // Myopia, Sunglasses, Reading, Contacts
  products Product[]
}

model Product {
  id          Int              @id @default(autoincrement())
  name        String
  /// db.Text类似于django的model.textField()
  description String           @db.Text
  price       Decimal
  categoryId  Int
  /// “这个 product 的 category 字段是 Category 对象，数据库里存 categoryId，categoryId 对应 Category 表的 id，Prisma 会帮我做外键和 ORM 映射”
  category    Category         @relation(fields: [categoryId], references: [id])
  images      ProductImage[]
  variants    ProductVariant[]
  createdAt   DateTime         @default(now())
  updatedAt   DateTime         @updatedAt
}

model ProductImage {
  id        Int     @id @default(autoincrement())
  url       String  @db.VarChar(500)
  productId Int
  product   Product @relation(fields: [productId], references: [id])
}

model ProductVariant {
  id         Int         @id @default(autoincrement())
  productId  Int
  product    Product     @relation(fields: [productId], references: [id])
  color      String // Frame Color
  lensType   String // Lens Type
  stock      Int         @default(0)
  cartItems  CartItem[]
  orderItems OrderItem[]
}

model Cart {
  id        Int        @id @default(autoincrement())
  userId    Int        @unique
  user      User       @relation(fields: [userId], references: [id])
  items     CartItem[]
  updatedAt DateTime   @updatedAt
}

model CartItem {
  id               Int            @id @default(autoincrement())
  cartId           Int
  cart             Cart           @relation(fields: [cartId], references: [id])
  productVariantId Int
  productVariant   ProductVariant @relation(fields: [productVariantId], references: [id])
  quantity         Int

  /// 这是购物车的约束，一个商品变体在一个购物车里只能一条
  @@unique([cartId, productVariantId])
}

model Order {
  id Int @id @default(autoincrement())

  // 业务
  orderNo String @unique // mchOrderNo
  userId  Int
  user    User   @relation(fields: [userId], references: [id])

  // 金额
  totalAmount Decimal @db.Decimal(10, 2)

  // 支付平台信息
  platformOrderNo String? // Insppay 返回的订单号
  paymentChannel  String? // INSppay / Stripe / Paypal

  // 状态机
  status String @default("PENDING")
  // PENDING | PAID | FAILED | EXPIRED | REFUNDED | SHIPPED | DELIVERED | CANCELLED

  // 地址
  shippingAddress String @db.Text

  // 时间
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // 关联
  items    OrderItem[]
  payments PaymentLog[]
}

model OrderItem {
  id      Int   @id @default(autoincrement())
  orderId Int
  order   Order @relation(fields: [orderId], references: [id])

  productVariantId Int
  productVariant   ProductVariant @relation(fields: [productVariantId], references: [id])

  quantity Int
  price    Decimal @db.Decimal(10, 2)
}

model PaymentLog {
  id Int @id @default(autoincrement())

  orderId Int
  order   Order @relation(fields: [orderId], references: [id])

  provider        String // INSPPAY
  mchOrderNo      String // 商户订单号
  platformOrderNo String? // 第三方订单号

  amount Decimal @db.Decimal(10, 2)

  requestPayload  Json?
  responsePayload Json?

  status String @default("INIT")
  // INIT | SUCCESS | FAILED

  createdAt DateTime @default(now())
}
```

