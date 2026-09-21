# Summer Project Hub

个人项目聚合与面试展示站，集中收录组件 Demo、纯前端应用、全栈项目和已上线产品。

## 特点

- Vue 3 + TypeScript + Vite
- 配置驱动的项目数据，新增项目无需修改页面组件
- 支持在线 Demo、外部网站、前后端源码和 API 文档等不同链接类型
- 项目分类筛选与独立详情页
- 使用 Hash Router，适配 GitHub Pages 静态托管
- 响应式布局，支持桌面端和移动端

## 本地运行

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
```

## 新增项目

在 `src/data/projects.ts` 中增加一条项目配置。项目类型、链接和字段定义位于 `src/types/project.ts`。

支持的项目类型：

- `frontend-demo`：纯前端应用
- `component`：组件与实验 Demo
- `fullstack`：前后端完整项目
- `live-product`：已经上线的外部项目
