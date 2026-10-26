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
      demo: 'https://pinkpinkfloyd.github.io/Vue3-components/',
      source: 'https://github.com/PinkPinkFloyd/Vue3-components',
    },
    demoStatus: 'live',
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
    links: {
      demo: 'https://pinkpinkfloyd.github.io/lowcode-miniprogram-vue3/',
      source: 'https://github.com/PinkPinkFloyd/lowcode-miniprogram-vue3',
    },
    demoStatus: 'live',
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
      demo: 'https://pinkpinkfloyd.github.io/doc-highlight-demo/',
      source: 'https://github.com/PinkPinkFloyd/doc-highlight-demo',
    },
    demoStatus: 'live',
    accent: '#d97706',
    code: 'CANVAS / 03',
    featured: true,
  },
  {
    id: 'boldburst-glasses',
    slug: 'boldburst-glasses',
    order: 4,
    title: 'BoldBurst 眼镜商城',
    shortTitle: 'BoldBurst',
    summary: '从商品分类与规格选择到模拟结算和订单记录的眼镜商城体验。',
    description:
      '基于 Nuxt、Vue 与 Pinia 构建商城前端，配套 NestJS、Prisma 和 MySQL 后端源码。在线 Demo 使用浏览器本地 Mock 数据，支持示例登录、购物车和完整模拟购物流程。',
    type: 'application',
    stack: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Pinia', 'NestJS', 'Prisma', 'MySQL'],
    highlights: [
      '近视镜、太阳镜、阅读镜和隐形眼镜四类商品浏览',
      '颜色与镜片规格联动、购物车数量修改和金额汇总',
      '示例账号登录、模拟注册、结算与订单记录',
      '浏览器本地保存演示数据，支持刷新恢复和一键重置',
    ],
    challenges: [
      '通过统一接口层将商城流程转换为独立运行的静态演示',
      '统一价格换算、规格选择和购物车数量，保证结算金额一致',
    ],
    architecture: [
      'Nuxt 页面与独立组件组织商城界面',
      'Pinia 管理账户与购物车，Mock 接口负责本地数据持久化',
      'NestJS 与 Prisma 提供后端源码参考，演示无需连接数据库或支付平台',
    ],
    links: {
      demo: 'https://pinkpinkfloyd.github.io/BoldburstGlassesNew-front/',
      frontendSource: 'https://github.com/PinkPinkFloyd/BoldburstGlassesNew-front/tree/github-pages-demo',
      backendSource: 'https://github.com/PinkPinkFloyd/boldburstGlassesNew',
    },
    demoStatus: 'live',
    accent: '#0f766e',
    code: 'COMMERCE / 04',
    featured: true,
  },
  {
    id: 'tiantian-supply-chain',
    slug: 'tiantian-supply-chain',
    order: 5,
    title: '天天科技 · 工业品供应链平台',
    shortTitle: 'Tiantian Technology',
    summary: '连接企业展示、MRO 业务管理与 CSM 客户服务的工业品供应链平台。',
    description:
      '天天供应链科技围绕工业品 MRO 提供第四方解决方案，通过业务管理、货源共享与客户服务连接贸易商和终端企业。本项目集中展示天天科技官网、MRO 后台管理系统及 CSM 客户服务系统三个线上入口。',
    type: 'application',
    stack: ['Vue', 'TypeScript', 'Vite', 'JSX', 'Composition API'],
    highlights: [
      '企业官网展示工业品供应链解决方案与服务定位',
      'MRO 系统覆盖采购、供应、库存、结算等核心业务管理',
      '供应链协同与货源共享，连接贸易商及其合作伙伴',
      'CSM 面向终端企业，承接客户服务与业务协同场景',
    ],
    challenges: [
      '在复杂业务与大数据量场景中优化表格交互和渲染性能',
      '通过公共组件复用与 Vue 3 渐进式重构支持长期迭代',
    ],
    architecture: [
      '官网负责企业和解决方案展示，业务系统承接日常管理',
      'MRO 与 CSM 分别面向后台业务管理和终端客户服务',
      '前端通过公共组件、通用 Hook 与 TypeScript 支持多系统开发',
    ],
    links: {
      caseStudy: 'https://baby.ifeng.com/c/8cE56ebS5w9',
    },
    sites: [
      {
        name: '天天科技官网',
        url: 'http://www.ttytms.com/',
        description: '了解天天科技的企业定位、工业品供应链解决方案与服务方向。',
      },
      {
        name: 'MRO 后台管理系统',
        url: 'https://tttmro.com/#/login',
        description: '面向工业品贸易商的业务管理平台，覆盖采购、供应、库存、结算等核心流程。',
        requiresLogin: true,
      },
      {
        name: 'CSM 客户服务系统',
        url: 'https://csm.tttmro.com/#/login',
        description: '面向终端企业的客户服务入口，连接贸易商与客户的服务需求和业务协同。',
        requiresLogin: true,
      },
    ],
    accessNote: 'MRO 和 CSM 系统需登录体验，请联系我本人获取测试账号。',
    demoStatus: 'live',
    accent: '#0284c7',
    code: 'SUPPLY CHAIN / 05',
    featured: true,
  },
  {
    id: 'summer-quant',
    slug: 'summer-quant',
    order: 6,
    title: 'Summer Quant · 看盘回测工作台',
    shortTitle: 'Summer Quant',
    summary: '自研的本地量化研究工作台，串联股票看盘、选股、基金分析与策略回测。',
    description:
      '面向 A 股与公募基金的自研量化研究工作台，以 Vue 3 和 TypeScript 构建研究界面，配合 FastAPI、Pandas 与 SQLite 组织数据和回测服务。将自选股行情、技术指标、基本面资料、短长线选股、基金交易流水回算及策略实验汇入同一工作区，支持从观察市场到验证策略的完整研究流程。本页通过高清截图展示项目。',
    type: 'application',
    stack: ['Vue 3', 'TypeScript', 'FastAPI', 'Pandas', 'SQLite', 'AKShare', 'BaoStock', 'Vite'],
    highlights: [
      '自选股实时行情、分钟分时、资金流与多种技术指标，结合基本面资料辅助看盘',
      '沪深 A 股短线与长线筛选，区分正式规则和试验规则并展示数据覆盖状态',
      '基金收益风险对比、定投与赎回流水回算，以及基于历史收益的未来情景模拟',
      '七类策略参数化回测，汇总收益、回撤、风险指标、交易成本和信号依据',
      '历史行情回放与本地模拟交易，研究结果和回测记录可保存、查询与复现',
    ],
    challenges: [
      '统一多来源行情、复权口径与缓存校验，并标明数据时间和来源',
      '按 A 股整手、T+1、佣金和印花税等约束模拟成交，屏蔽指标预热期信号',
      '通过时间顺序验证、信号复算与风控约束，减少未来数据泄漏和回测偏差',
    ],
    architecture: [
      'Vue 3 负责看盘、选股、基金分析与回测实验等研究界面',
      'FastAPI 组织行情接入、技术分析、策略计算、回测和回放服务',
      'SQLite 保存回测记录，本地行情缓存附带来源与完整性元数据',
      '本地研究与模拟交易分离，当前未连接真实券商网关',
    ],
    links: {},
    screenshots: [
      {
        src: 'assets/projects/summer-quant/backtest.png',
        alt: 'Summer Quant 回测实验室界面',
        caption: '回测实验室 · 策略配置与绩效汇总',
      },
      {
        src: 'assets/projects/summer-quant/market.png',
        alt: 'Summer Quant 自选股看盘界面',
        caption: '持仓看盘 · 行情、技术指标与信号观察',
      },
      {
        src: 'assets/projects/summer-quant/screener.png',
        alt: 'Summer Quant 短线选股界面',
        caption: '选股研究 · 正式规则与试验规则',
      },
      {
        src: 'assets/projects/summer-quant/fund-plan.png',
        alt: 'Summer Quant 基金分析与定投配置界面',
        caption: '基金分析 · 交易流水与定投计划',
      },
      {
        src: 'assets/projects/summer-quant/fund-scenarios.png',
        alt: 'Summer Quant 基金投入回算与未来情景界面',
        caption: '基金研究 · 持仓回算与未来情景区间',
      },
    ],
    demoStatus: 'showcase',
    accent: '#2563a6',
    code: 'QUANT / 06',
    featured: true,
  },
]

export function findProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
