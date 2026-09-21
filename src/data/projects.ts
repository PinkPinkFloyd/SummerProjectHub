import type { Project, ProjectType } from '@/types/project'

export const projectTypeLabels: Record<ProjectType, string> = {
  application: '应用',
  component: '组件',
}

export const projects: Project[] = [
  {
    id: 'print-editor',
    slug: 'vue3-print-editor',
    order: 1,
    title: '可配置打印模板编辑器',
    shortTitle: 'Print Studio',
    summary: '从真实业务中抽离的打印模板管理与可视化编排 Demo。',
    description:
      '保留打印模板列表、纸张配置、字段编排和图片元素拖拽等核心能力，同时展示大型 Vue 2 业务组件向 Vue 3 与 TypeScript 的渐进式迁移。',
    type: 'component',
    stack: ['Vue 3', 'TypeScript', 'Element Plus', 'interact.js', 'Vite'],
    highlights: [
      '打印模板分类、检索、复制与默认模板管理',
      '标题、明细表格、底部字段和自定义条款编排',
      'LOGO、二维码和印章元素的拖拽与缩放',
      'Vue 2 Options API 到 Composition API 的迁移对照',
    ],
    challenges: [
      '把强业务依赖的打印模块抽离为可独立运行的 Demo',
      '保持模板领域模型稳定，同时替换旧框架和构建链路',
    ],
    architecture: ['路由页面负责业务流程', '编辑组件通过 v-model 同步配置', 'Mock 层隔离外部接口'],
    links: {
      source: 'https://github.com/PinkPinkFloyd/Vue3-components',
    },
    demoStatus: 'preparing',
    accent: '#2563eb',
    code: 'PRINT / 01',
    featured: true,
  },
  {
    id: 'mini-program-builder',
    slug: 'mini-program-builder',
    order: 2,
    title: '小程序低代码搭建器',
    shortTitle: 'Mini Builder',
    summary: '通过拖拽、动态组件和配置模型搭建小程序商城页面。',
    description:
      '采用左侧组件库、中间手机预览和右侧属性面板的经典低代码布局。展示组件与编辑组件成对注册，同一份配置数据驱动画布渲染和属性修改。',
    type: 'component',
    stack: ['Vue 3', 'TypeScript', 'vuedraggable', 'Pinia', 'Element Plus'],
    highlights: [
      '页面管理、首页设置和多页面切换入口',
      '组件拖入、排序、复制、置顶、置底和删除',
      '搜索、轮播、导航、标题、商品和分割组件',
      '异步组件注册表驱动预览与编辑面板',
    ],
    challenges: [
      '保证同类型组件的配置实例相互隔离',
      '同步维护画布顺序、当前选中项和右侧编辑器映射',
    ],
    architecture: ['useInit 管理初始模型', 'useDrag 处理克隆与拖入', 'componentsMap 负责动态组件注册'],
    links: {},
    demoStatus: 'preparing',
    accent: '#059669',
    code: 'LOW CODE / 02',
    featured: true,
  },
  {
    id: 'doc-highlight',
    slug: 'document-highlight',
    order: 3,
    title: '文档对比与 Canvas 高亮',
    shortTitle: 'Doc Compare',
    summary: '面向长文档审阅的划词高亮、注释、Diff 与跨栏关联 Demo。',
    description:
      '将正文文本映射为稳定的线性偏移，再利用 DOM Range 还原屏幕矩形并绘制到 Canvas 覆盖层。高亮数据不污染正文 DOM，便于重绘、序列化和扩展。',
    type: 'component',
    stack: ['Vue 3', 'Canvas 2D', 'DOM Range', 'ResizeObserver', 'jsdiff'],
    highlights: [
      '划词高亮、下划线和注释编辑',
      '左右文档逐词 Diff 与关键词同步检索',
      '父高亮与子高亮的一对多关联',
      'Canvas 高分辨率适配、滚动对齐和命中检测',
    ],
    challenges: [
      '跨文本节点、跨行选区到稳定线性偏移的转换',
      '布局变化和长文档滚动后的 Canvas 几何重算',
    ],
    architecture: ['线性文本偏移作为数据模型', 'Range 负责偏移到矩形的转换', '双 Canvas 分离用户与检索高亮'],
    links: {
      source: 'https://github.com/PinkPinkFloyd/doc-highlight-demo',
    },
    demoStatus: 'preparing',
    accent: '#d97706',
    code: 'CANVAS / 03',
    featured: true,
  },
]

export function findProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
