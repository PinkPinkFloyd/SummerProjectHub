<script setup lang="ts">
import ResumePhotoGallery from '@/components/resume/ResumePhotoGallery.vue'
</script>

<template>
  <section id="experience" class="resume-section experience-section">
    <header class="section-heading">
      <span>04</span>
      <h2>工作经历</h2>
    </header>

    <div class="experience-list">
      <article class="experience-entry">
        <header class="entry-header">
          <time>2026.02 — 至今</time>
          <div>
            <h3>智慧芽 · IPOS 新加坡专利审查系统</h3>
            <p>前端开发负责人</p>
          </div>
        </header>
        <p class="tech-stack"><span>技术栈</span>Vue3 + TypeScript + Canvas API + Selection API + Element Plus</p>
        <ul class="detail-list">
          <li><strong>项目亮点：</strong>基于 <b>Canvas + Selection API</b> 实现文本高亮注释组件；浮动工具条随选区动态定位，注释层与内容层解耦，支持字号自适应重绘</li>
          <li>经三轮迭代优化（v3），新增<strong>快捷键操作与跨组件 add-to</strong>，注释组件在多页面中复用；点击注释可快速反向定位高亮原文</li>
          <li><strong>AI 工程效能：</strong>编写项目专属 Claude Code Skill，将团队开发规范沉淀为可复用上下文；利用 Multica（多智能体任务协作平台）接入 Jira，Agent 自动完成 Bug 复现分析、代码定位与回归要点输出，降低跨角色沟通成本</li>
        </ul>
      </article>

      <article class="experience-entry">
        <header class="entry-header">
          <time>2025.10 — 2026.01</time>
          <div>
            <h3>Boldburst Glasses 海外电商独立站</h3>
            <p>全栈独立开发</p>
          </div>
        </header>
        <p class="tech-stack"><span>技术栈</span>Nuxt 4 + NestJS + TypeScript + MySQL + Tailwind CSS</p>
        <ul class="detail-list">
          <li><strong>全栈架构设计：</strong>独立负责从 0 到 1 的全栈开发。前端采用 <b>Nuxt 4</b> 实现 <b>SSR 服务端渲染</b>，显著提升海外搜索引擎（Google SEO）收录权重与首屏加载速度；后端基于 <b>NestJS</b> 构建高性能 RESTful API</li>
          <li><strong>支付与订单系统：</strong>完成复杂的<strong>三方支付对接</strong>，实现从购物车、结算页到支付回调的全流程闭环，确保资金流转安全稳定</li>
        </ul>
        <a class="inline-link" href="https://www.boldburstglasses.com/" target="_blank" rel="noreferrer">www.boldburstglasses.com <span aria-hidden="true">↗</span></a>
      </article>

      <article class="experience-entry">
        <header class="entry-header">
          <time>2025.03 — 2025.12</time>
          <div>
            <h3>海外商户后台系统</h3>
            <p>前端负责人 · 独立负责前端整体架构与开发</p>
          </div>
        </header>
        <div class="content-block">
          <h4>项目背景</h4>
          <p>面向印度本地商户的综合运营后台系统，支持账目管理、数据统计分析及代收代付业务流程管理，服务于跨境支付与本地化清结算场景。</p>
        </div>
        <div class="content-block">
          <h4>个人职责</h4>
          <ul class="detail-list compact-list">
            <li>主导前端架构升级，将原有 Vue2 项目整体迁移至 Vue3（Composition API）</li>
            <li>负责数据统计模块，基于 ECharts 实现商户代收、代付、提现趋势图</li>
            <li>作为唯一前端开发，负责前端技术选型、代码规范制定、组件体系搭建及版本迭代管理</li>
          </ul>
        </div>
        <div class="content-block">
          <h4>同期并行项目</h4>
          <p>参与 catWildShop、Elecoms、Now eco clothing 等海外电商项目前端开发，负责页面实现、H5 支付跳转及商户后台功能；并参与 Python 后台系统的维护优化工作。</p>
        </div>
      </article>

      <article class="experience-entry company-entry">
        <header class="entry-header company-header">
          <time>2021.09 — 2025.03</time>
          <div>
            <h3>苏州天天供应链科技有限公司</h3>
            <p>Web 前端开发工程师 · 前端组长</p>
          </div>
        </header>

        <section class="project-block">
          <div class="project-title">
            <span>01</span>
            <h4>MRO 后台管理系统</h4>
          </div>
          <div class="content-block">
            <h5>项目背景</h5>
            <p>工业品 MRO 生态链核心系统，覆盖采购、供应、库存、结算等多业务模块，项目周期长、数据量大、系统复杂。</p>
          </div>
          <div class="content-block">
            <h5>个人职责</h5>
            <ul class="detail-list compact-list">
              <li>负责系统核心功能模块与公共组件的设计与开发</li>
              <li>参与并推动旧项目向 <strong>Vue3 + Composition API</strong> 的渐进式重构</li>
            </ul>
          </div>
          <div class="content-block">
            <h5>技术难点 & 解决方案</h5>
            <div class="solution-list">
              <div>
                <p>原有表格组件在大数据量场景下性能不足</p>
                <strong>→ 独立开发全局公共虚拟表格组件（JSX），支持万级数据流畅渲染、列显隐与公共筛选</strong>
              </div>
              <div>
                <p>项目历史包袱重、代码冗余、构建体积过大</p>
                <strong>→ 清理冗余代码与接口，引入 Vue3 技术栈，优化整体工程结构</strong>
              </div>
            </div>
          </div>
          <div class="content-block">
            <h5>项目成果</h5>
            <ul class="detail-list compact-list">
              <li>万级数据表格场景下页面渲染保持流畅，明显改善用户体验</li>
              <li>公共组件复用后，新需求开发效率提升</li>
              <li>项目线上问题减少，降低后期维护与迭代成本</li>
            </ul>
          </div>
        </section>

        <section class="project-block">
          <div class="project-title">
            <span>02</span>
            <h4>CSM / BMS / SRM 等后台管理系统</h4>
          </div>
          <div class="content-block">
            <h5>项目简介</h5>
            <p>MRO 生态链多子系统，服务企业内部多角色协同办公。</p>
          </div>
          <div class="content-block">
            <h5>个人职责 & 成果</h5>
            <ul class="detail-list compact-list">
              <li>抽象并封装多套公共组件与通用 Hook，规范团队前端代码风格</li>
              <li>引入 <strong>TypeScript</strong>，提升代码可维护性与可读性</li>
              <li>使用 <strong>Vue3 + Vite</strong> 构建项目，提升开发效率与页面性能</li>
              <li>参与前端技术分享会组织，担任 <strong>Vue3 技术分享讲师</strong></li>
            </ul>
            <ResumePhotoGallery />
          </div>
        </section>

        <section class="project-block">
          <div class="project-title">
            <span>03</span>
            <h4>审批流微前端项目 / MRO 小程序 / 公司官网</h4>
          </div>
          <div class="content-block">
            <h5>项目亮点</h5>
            <ul class="detail-list compact-list">
              <li>主导审批流模块的<strong>微前端拆分</strong>，将其作为独立项目供多系统复用</li>
              <li>采用 <strong>iframe + WebSocket</strong> 实现多系统通信，减少重复开发与维护成本</li>
              <li>负责 H5 / 小程序端兼容性处理与构建优化，避免上线失败风险</li>
              <li>使用 CSS 变量实现官网商城主题色动态切换</li>
            </ul>
          </div>
        </section>

        <section class="project-block">
          <div class="project-title">
            <span>04</span>
            <h4>日报神器（内部效率工具）</h4>
          </div>
          <div class="content-block">
            <h5>项目亮点</h5>
            <ul class="detail-list compact-list">
              <li>基于 <strong>Vue3 + FastAPI</strong> 开发 Chrome 浏览器插件，服务于公司内部各部门的日报填报与汇总场景</li>
              <li>前端负责插件 UI、表单交互及数据校验，后端提供 API 服务并负责数据处理</li>
              <li>通过<strong>钉钉 Hook 机器人</strong>将日报内容自动推送至对应群组，实现信息同步与留痕</li>
              <li>降低人工整理成本，提高部门内部信息流转效率</li>
            </ul>
            <a class="inline-link" href="https://gitee.com/sun-sumin/daily-artifact" target="_blank" rel="noreferrer">gitee.com/sun-sumin/daily-artifact <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section class="project-block ai-cases">
          <div class="project-title">
            <span>AI</span>
            <h4>AI Coding 实战案例</h4>
          </div>
          <ul class="detail-list">
            <li>使用 <strong>Gemini-CLI</strong>，实现“只提供旧代码 + 组件截图 + Skill 描述，即可生成可运行的 Vue3 Demo 项目”</li>
            <li>
              设计并编写 <strong>Vue2 → Vue3 组件重构 Skill</strong>，用于指导 AI 自动完成：
              <ul>
                <li>公共组件与子组件拆分</li>
                <li>无关 mixins / 全局方法过滤</li>
                <li>Vue3 + TypeScript + &lt;script setup&gt; 重构</li>
                <li>样式使用 Tailwind CSS 且与业务逻辑解耦</li>
                <li>数据源 Mock，自动匹配对应的 Vue3 第三方 npm 包</li>
              </ul>
            </li>
            <li>
              Git 链接：
              <a href="https://github.com/PinkPinkFloyd/Vue3-components" target="_blank" rel="noreferrer">github.com/PinkPinkFloyd/Vue3-components</a>
            </li>
            <li>通过多个 <strong>Skills</strong> 配合 <strong>MCP</strong> 指导 AI 构建 <strong>NestJS + Nuxt 4 企业级电商项目</strong>：通过 Skill + MCP 目录结构约束，使 AI 生成代码字段严格对齐，前后端目录结构强约束，可直接联调并减少人工修正成本</li>
          </ul>
        </section>

        <section class="project-block personal-project">
          <div class="project-title">
            <span>LAB</span>
            <h4>智能桌面 AI Agent 助手（个人自研中）</h4>
          </div>
          <p class="tech-stack"><span>技术栈</span>Electron + NestJS + LangChain + Qwen3-Embedding-0.6B + MySQL</p>
          <ul class="detail-list">
            <li><strong>项目描述：</strong>一款基于桌面端的智能 AI 代理应用，旨在通过 LLM 能力辅助用户处理基因 SNP 数据分析库与代码生成助理</li>
            <li><strong>架构实现：</strong>采用 <b>Electron</b> 构建跨平台桌面客户端，内置 <b>NestJS</b> 作为本地服务端处理业务逻辑，局域网部署 Qwen3-Embedding-0.6B 用作 RAG，通过 <b>Prisma</b> 管理本地 MySQL 数据库，实现数据本地化存储与隐私保护</li>
            <li><strong>AI 核心能力：</strong>集成 <b>LangChain</b> 框架编排 AI 工作流，对接大模型 API，实现自然语言交互、上下文记忆及任务自动化执行功能</li>
          </ul>
          <a class="inline-link" href="https://github.com/PinkPinkFloyd/GeneReportAgent" target="_blank" rel="noreferrer">github.com/PinkPinkFloyd/GeneReportAgent <span aria-hidden="true">↗</span></a>
        </section>
      </article>
    </div>
  </section>
</template>

<style scoped>
.resume-section {
  scroll-margin-top: 132px;
  padding: 48px 52px;
  border-bottom: 1px solid var(--line);
}

.section-heading {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 10px;
}

.section-heading > span {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(1.65rem, 3vw, 2.25rem);
  letter-spacing: -0.04em;
}

.experience-list {
  display: grid;
}

.experience-entry {
  position: relative;
  display: grid;
  gap: 22px;
  padding: 38px 0 42px 28px;
  border-left: 1px solid var(--line-strong);
}

.experience-entry::before {
  position: absolute;
  top: 46px;
  left: -5px;
  width: 9px;
  height: 9px;
  border: 2px solid var(--surface);
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 1px var(--accent);
  content: '';
}

.experience-entry + .experience-entry {
  border-top: 1px solid var(--line);
}

.entry-header {
  display: grid;
  grid-template-columns: 142px minmax(0, 1fr);
  gap: 20px;
  align-items: start;
}

.entry-header time {
  padding-top: 4px;
  color: var(--text-faint);
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.entry-header h3 {
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.45;
  letter-spacing: -0.025em;
}

.entry-header p {
  margin: 6px 0 0;
  color: var(--accent);
  font-size: 0.875rem;
}

.tech-stack {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin: 0;
  padding: 11px 14px;
  border-radius: 8px;
  background: var(--surface-muted);
  color: var(--text-subtle);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  line-height: 1.65;
}

.tech-stack span {
  flex: 0 0 auto;
  color: var(--text-faint);
  font-family: var(--font-sans);
  font-size: 0.6875rem;
}

.detail-list {
  display: grid;
  gap: 13px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.detail-list > li {
  position: relative;
  padding-left: 18px;
  color: var(--text-muted);
  font-size: 0.9375rem;
  line-height: 1.75;
}

.detail-list > li::before {
  position: absolute;
  top: 0.7em;
  left: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
  content: '';
}

.detail-list strong,
.detail-list b {
  color: var(--text-subtle);
  font-weight: 650;
}

.detail-list ul {
  display: grid;
  gap: 6px;
  margin: 11px 0 0;
  padding-left: 20px;
  list-style: '–  ';
}

.detail-list a {
  color: var(--accent);
  overflow-wrap: anywhere;
}

.inline-link {
  width: fit-content;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.inline-link span {
  display: inline-block;
  margin-left: 5px;
  transition: transform 160ms ease;
}

.inline-link:hover span {
  transform: translate(2px, -2px);
}

.content-block {
  display: grid;
  gap: 10px;
}

.content-block h4,
.content-block h5 {
  margin: 0;
  color: var(--text-subtle);
  font-size: 0.8125rem;
  letter-spacing: 0.04em;
}

.content-block p {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.9375rem;
  line-height: 1.75;
}

.compact-list {
  gap: 8px;
}

.company-entry {
  padding-bottom: 0;
}

.project-block {
  display: grid;
  gap: 20px;
  margin-top: 6px;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface-muted);
}

.project-title {
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--line);
}

.project-title span {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
}

.project-title h4 {
  margin: 0;
  font-size: 1.0625rem;
  line-height: 1.45;
}

.solution-list {
  display: grid;
  gap: 12px;
}

.solution-list > div {
  padding: 14px 16px;
  border-left: 2px solid var(--accent);
  background: var(--surface);
}

.solution-list p {
  color: var(--text-muted);
}

.solution-list strong {
  display: block;
  margin-top: 6px;
  color: var(--text-subtle);
  font-size: 0.875rem;
  line-height: 1.65;
}

@media (max-width: 700px) {
  .resume-section {
    padding: 34px 22px;
  }

  .experience-entry {
    padding-left: 20px;
  }

  .entry-header {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .project-block {
    padding: 20px;
  }

  .tech-stack {
    align-items: flex-start;
    flex-direction: column;
    gap: 5px;
  }
}
</style>
