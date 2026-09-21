---
name: 企业级前后端电商项目生成(Vue3 + Nuxt4 + NestJS)
description: 
      你是一个高级全栈开发工程师，当用户输入「帮我创建一个前后端企业级电商网站项目」并提供项目名与参考网站时，本 Skill 将自动生成一个前后端分离、企业级规范的电商系统项目。
      包含：
          - 现代化高级前端 UI（Nuxt 4 + Nuxt UI）

          - 企业级后端架构（NestJS + Prisma 5.22.0 + MySQL）

          - Redis 用于 Token 与购物车缓存

          - 完整电商核心模块

          - 严格一致的前后端字段与接口设计
---

# # 触发条件（Trigger）

仅在用户 **明确提出以下意图** 时触发：

- 创建 / 生成 / 初始化  
  **全英文 + 前后端 + 电商网站项目**

- 并至少提供：
  
  - 项目名（如：`xxxshop`）
  
  - 参考网站 URL（如：`www.xxx.com`）

### 示例触发语句

> 帮我创建一个全英文前后端企业级电商网站项目，项目名叫 xxxshop，参考网站是 [www.xxx.com](http://www.xxx.com)

---

# 输入参数（Inputs）

| 参数名               | 必填  | 说明                 |
| ----------------- | --- | ------------------ |
| projectName       | 是   | 项目根目录名，如 `xxxshop` |
| referenceSite     | 是   | 用于 UI / UX 参考的网站   |
| extraRequirements | 否   | 用户额外说明             |

---

# 语言强约束（非常重要）

⚠️ **整个项目必须 100% 使用英文**

包括但不限于：

- 页面文案

- 页面标题

- 组件名称

- API 名称

- 变量名

- 注释

- README / 说明文本

❌ 不允许出现中文或中英混用

---

# 根目录结构（强制）

必须生成如下目录结构，不得擅自修改**：

`xxxshop ├── xxxshop-frontend └── xxxshop-backend`

❌ 不允许使用 monorepo  
❌ 不允许出现 apps / packages 等额外目录

---

# 前端项目要求（Frontend）

## 技术栈（硬性约束）

- 框架：**Nuxt 4**

- 核心：**Vue 3**

- UI：**Nuxt UI**

- 样式：**Tailwind CSS**

- API 风格：Composition API

⚠️  **必须读取并遵循 Nuxt 4 的 Skill**  
⚠️  **必须严格按照我后续提供的前端项目结构与 `package.json` 使用技术**  
⚠️  **项目结构中没有的技术、库、目录，一律禁止使用**

---

## 前端 UI 要求

- 现代化

- 高级感

- 企业级

- 电商真实可用 UI

- 参考用户提供的网站进行：
  
  - 布局风格
  
  - 视觉密度
  
  - 电商交互方式设计

❌ 不允许 demo 级 UI  
❌ 不允许仅展示示例页面

**读取[reference\frontend-design.md](reference\frontend-design.md)**

---

## 必须包含的公共静态页面（页脚链接）

以下页面 **必须满足所有条件**：

- 公共可访问（无需登录）

- 页面真实存在

- 必须在网站 Footer 中提供可点击链接

- 内容为完整英文说明（非一句话）

### 必须包含的页面列表

1. **About Us**
   
   - 清晰的公司身份说明
   
   - 公司业务描述

2. **Privacy Policy**
   
   - 数据收集方式
   
   - 数据使用方式
   
   - 数据存储
   
   - 第三方共享说明

3. **Terms and Conditions**
   
   - 使用规则
   
   - 用户责任
   
   - 适用法律

4. **Refund / Cancellation Policy**
   
   - 退款或取消资格
   
   - 退款时间说明

5. **Shipping / Delivery Policy**
   
   - 发货时间
   
   - 运费说明
   
   - 覆盖范围
   
   - 适用于实体商品

6. **Contact Us**
   
   - 有效的支持邮箱
   
   - 实际地址或公司地址（示例占位即可）

---

### 前端目录结构以及package.json（不一定完全锁死，大致参考90%）

```
xxxx项目名-frontend/
├── app/
│ ├── app.vue
│ ├── error.vue
│ ├── layouts/
│ │ ├── default.vue # 商城主布局
│ │ ├── blank.vue # 登录 / 支付回调
│ │ └── admin.vue # 管理后台布局
│ ├── middleware/
│ │ ├── auth.global.ts # 登录态校验（JWT）
│ │ └── admin.ts # 管理员权限
│ └── plugins/
│ ├── pinia.ts
│ ├── request.ts # 请求实例（统一 token）
│ └── dayjs.ts
│
├── pages/
│ ├── index.vue # 首页
│ ├── category/
│ │ └── [id].vue
│ ├── product/
│ │ └── [id].vue
│ ├── cart.vue
│ ├── order/
│ │ ├── confirm.vue
│ │ ├── detail/[id].vue
│ │ └── pay.vue
│ ├── user/
│ │ ├── index.vue
│ │ └── orders.vue
│ └── admin/
│ ├── index.vue
│ ├── products.vue
│ ├── orders.vue
│ └── users.vue
│
├── components/
│ ├── common/
│ │ ├── AppHeader.vue
│ │ ├── AppFooter.vue
│ │ └── Pagination.vue
│ ├── product/
│ │ ├── ProductCard.vue
│ │ ├── ProductSku.vue
│ │ └── ProductGallery.vue
│ ├── cart/
│ │ └── CartItem.vue
│ └── order/
│ └── OrderStatus.vue
│
├── composables/
│ ├── useAuth.ts
│ ├── useCart.ts
│ ├── useOrder.ts
│ └── useUser.ts
│
├── stores/ # Pinia（与 Prisma Model 对应）
│ ├── user.store.ts
│ ├── cart.store.ts
│ └── order.store.ts
│
├── services/ # ⭐ 与 NestJS Controller 一一对应
│ ├── http.ts # axios / $fetch 封装
│ ├── auth.service.ts # AuthController
│ ├── user.service.ts # UserController
│ ├── product.service.ts # ProductController
│ ├── category.service.ts # CategoryController
│ ├── cart.service.ts # CartController
│ ├── order.service.ts # OrderController
│ └── payment.service.ts # PaymentController
│
├── server/ # Nuxt BFF（可选但强烈推荐）
│ ├── api/
│ │ ├── auth/
│ │ │ └── login.post.ts
│ │ ├── product/
│ │ │ └── [id].get.ts
│ │ └── order/
│ │ └── create.post.ts
│ ├── middleware/
│ │ └── auth.ts
│ └── utils/
│ └── token.ts
│
├── types/ # ⭐ 从 Prisma 派生
│ ├── user.ts
│ ├── product.ts
│ ├── category.ts
│ ├── cart.ts
│ └── order.ts
│
├── utils/
│ ├── price.ts
│ ├── format.ts
│ └── storage.ts
│
├── assets/
│ ├── styles/
│ │ ├── variables.scss
│ │ ├── reset.scss
│ │ └── global.scss
│ └── images/
│
├── public/
│ └── favicon.ico
│
├── tests/
│ ├── unit/
│ └── e2e/
│
├── nuxt.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

```javascript
//前端的包示例，ps：不一定是最终版本

  "dependencies": {

    "@iconify-json/heroicons": "^1.2.3",

    "@iconify-json/lucide": "^1.2.82",

    "@iconify-json/simple-icons": "^1.2.63",

    "@nuxt/icon": "^2.2.0",

    "@nuxt/ui": "^4.3.0",

    "@pinia/nuxt": "^0.11.3",

    "nuxt": "^4.2.2",

    "pinia": "^3.0.4",

    "qrcode": "^1.5.4",

    "set-promise-interval": "^1.1.0"

  },

  "devDependencies": {

    "@nuxt/eslint": "^1.12.1",

    "eslint": "^9.39.2",

    "typescript": "^5.9.3",

    "vue-tsc": "^3.2.1"

  },
```

---

# 后端项目要求（Backend）

## 技术栈（硬性约束）

- 框架：**NestJS**

- ORM：**Prisma 5.22.0**

- 数据库：**MySQL**

- 缓存：**Redis**

---

## 后端模块（必须全部存在）

 **必须生成以下模块，命名与职责不可修改**：

1. **User**

2. **Auth**
   
   - 登录
   
   - JWT 鉴权

3. **Product**
   
   - 商品信息
   
   - 包含 ProductImage

4. **Category**

5. **Cart**

6. **Order**

7. **Payment**

---

## Payment 模块特殊规则（非常重要）

⚠️ **Payment 模块也要生成**

1. 必须读取 `payment.md`

2. 所有支付逻辑 **只能来源于 `payment.md`**

3. 不允许自行推断或扩展支付逻辑

---

## Redis 使用规则（强制）

### Token 缓存

- 登录成功后：
  
  - JWT Token 必须存入 Redis

- 示例 Key：
  
  `auth:token:{userId}`

---

### 后端目录结构以及package.json（不一定完全锁死，大致参考90%）

```
xxxx项目名-backend/
├── prisma/
│ ├── schema.prisma # ⭐ 唯一数据源（SSOT）
│ ├── migrations/
│ └── seed.ts
│
├── src/
│ ├── main.ts
│ ├── app.module.ts
│
│ ├── config/ # ⭐ 配置集中管理
│ │ ├── app.config.ts
│ │ ├── db.config.ts
│ │ ├── jwt.config.ts
│ │ └── redis.config.ts
│
│ ├── common/ # ⭐ 全局通用
│ │ ├── decorators/
│ │ │ ├── user.decorator.ts
│ │ │ └── roles.decorator.ts
│ │ ├── guards/
│ │ │ ├── jwt.guard.ts
│ │ │ └── roles.guard.ts
│ │ ├── interceptors/
│ │ │ ├── response.interceptor.ts
│ │ │ └── logging.interceptor.ts
│ │ ├── filters/
│ │ │ └── http-exception.filter.ts
│ │ ├── constants/
│ │ │ └── redis-key.ts
│ │ └── utils/
│ │ ├── crypto.ts
│ │ └── pagination.ts
│
│ ├── modules/ # ⭐ 业务模块（电商核心）
│ │ ├── auth/
│ │ │ ├── auth.module.ts
│ │ │ ├── auth.controller.ts
│ │ │ ├── auth.service.ts
│ │ │ ├── dto/
│ │ │ │ ├── login.dto.ts
│ │ │ │ └── register.dto.ts
│ │ │ └── strategies/
│ │ │ └── jwt.strategy.ts
│ │ │
│ │ ├── user/
│ │ │ ├── user.module.ts
│ │ │ ├── user.controller.ts
│ │ │ ├── user.service.ts
│ │ │ └── dto/
│ │ │ └── update-user.dto.ts
│ │ │
│ │ ├── product/
│ │ │ ├── product.module.ts
│ │ │ ├── product.controller.ts
│ │ │ ├── product.service.ts
│ │ │ └── dto/
│ │ │ ├── create-product.dto.ts
│ │ │ └── update-product.dto.ts
│ │ │
│ │ ├── category/
│ │ │ ├── category.module.ts
│ │ │ ├── category.controller.ts
│ │ │ └── category.service.ts
│ │ │
│ │ ├── cart/ # ⭐ Redis 为主
│ │ │ ├── cart.module.ts
│ │ │ ├── cart.controller.ts
│ │ │ └── cart.service.ts
│ │ │
│ │ ├── order/
│ │ │ ├── order.module.ts
│ │ │ ├── order.controller.ts
│ │ │ ├── order.service.ts
│ │ │ └── dto/
│ │ │ └── create-order.dto.ts
│ │ │
│ │ └── payment/
│ │ ├── payment.module.ts
│ │ ├── payment.controller.ts
│ │ └── payment.service.ts
│ │
│ ├── prisma/ # ⭐ Prisma Service 封装
│ │ ├── prisma.module.ts
│ │ └── prisma.service.ts
│
│ ├── redis/
│ │ ├── redis.module.ts
│ │ └── redis.service.ts
│
│ └── health/
│ ├── health.controller.ts
│ └── health.module.ts
│
├── test/
│ ├── auth.e2e-spec.ts
│ └── app.e2e-spec.ts
│
├── .env
├── .env.production
├── package.json
├── tsconfig.json
└── nest-cli.json
```

```javascript
//后端package.json的包示例，ps：不一定是最终版本

  "dependencies": {

    "@nestjs/common": "^11.0.1",

    "@nestjs/core": "^11.0.1",

    "@nestjs/jwt": "^11.0.2",

    "@nestjs/mapped-types": "*",

    "@nestjs/passport": "^11.0.5",

    "@nestjs/platform-express": "^11.0.1",

    "@prisma/client": "^5.22.0",

    "axios": "^1.13.2",

    "bcrypt": "^6.0.0",

    "class-transformer": "^0.5.1",

    "class-validator": "^0.14.3",

    "passport": "^0.7.0",

    "passport-jwt": "^4.0.1",

    "reflect-metadata": "^0.2.2",

    "rxjs": "^7.8.1"

  },

  "devDependencies": {

    "@eslint/eslintrc": "^3.2.0",

    "@eslint/js": "^9.18.0",

    "@nestjs/cli": "^11.0.0",

    "@nestjs/schematics": "^11.0.0",

    "@nestjs/testing": "^11.0.1",

    "@types/bcrypt": "^6.0.0",

    "@types/express": "^5.0.0",

    "@types/jest": "^30.0.0",

    "@types/node": "^22.19.7",

    "@types/passport-jwt": "^4.0.1",

    "@types/supertest": "^6.0.2",

    "eslint": "^9.18.0",

    "eslint-config-prettier": "^10.0.1",

    "eslint-plugin-prettier": "^5.2.2",

    "globals": "^16.0.0",

    "jest": "^30.0.0",

    "prettier": "^3.4.2",

    "prisma": "^5.22.0",

    "source-map-support": "^0.5.21",

    "supertest": "^7.0.0",

    "ts-jest": "^29.2.5",

    "ts-loader": "^9.5.2",

    "ts-node": "^10.9.2",

    "tsconfig-paths": "^4.2.0",

    "typescript": "^5.9.3",

    "typescript-eslint": "^8.20.0"

  },
```

---

### 购物车缓存

- 购物车数据 **必须优先存 Redis**

- 数据库存储只用于订单最终落库

- 示例 Key：
  
  `cart:{userId}`

---

# 后端 Skill 与数据源约束

- 允许使用后端开发 Skill：  
  **`backend-development`**

- ⚠️ 但：
  
  - **目录结构必须以我提供的为准**
  
  - 不得使用 backend-development 默认的企业级结构

- 数据库结构与初始数据：
  
  - **必须读取 `ecommerce-prisma-schema-and-seed` Skill**
  
  - **必须读取[reference\ecommerce-prisma-schema-and-seed.md](reference/ecommerce-prisma-schema-and-seed.md)**
  
  - 不自行设计 schema

---

# 环境变量规则

- 前端与后端环境变量：
  
  - 只需占位
  
  - 不校验是否可用

- 数据库 / Redis：
  
  - 不做真实连接
  
  - 不处理连接报错

---

# 输出要求（Skill 执行结果）

执行本 Skill 时，必须输出：

1. 项目整体说明

2. 前端项目结构

3. 后端项目结构

4. 核心模块职责说明

5. 技术选型说明

6. 后续扩展建议

---

# 禁止行为（Forbidden）

🚫 不允许：

- 更换技术栈

- 添加未声明的库

- 忽略 Redis

- 自动生成 Payment

- 使用非英文内容

- 偏离提供的目录结构

