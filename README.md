# Summer Project Hub

个人项目与 AI 开发技能聚合站，集中收录组件 Demo、完整应用和可复用的 Skill 文档。

## 特点

- Vue 3 + TypeScript + Vite
- 配置驱动的项目数据，新增项目无需修改页面组件
- 支持在线 Demo、外部网站、前后端源码和 API 文档等不同链接类型
- 项目分类筛选与独立详情页
- Skill 列表、文件树、Markdown 预览与源码查看
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

- `component`：独立组件与功能 Demo
- `application`：纯前端应用、全栈项目和已上线产品

多个线上网站可以归入同一个项目：配置可选的 `sites` 数组，每项包含 `name`、`url`、`description` 和可选的 `requiresLogin`。使用 `accessNote` 展示测试账号说明，联系入口跳转个人简历页。`links.caseStudy` 用于详情页的项目背景文章。

项目卡片使用 `order` 作为固定编号，分类筛选不会改变编号。
