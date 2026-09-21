<template>
  <section id="skills" class="resume-section skills-section">
    <header class="section-heading">
      <span>02</span>
      <h2>专业技能</h2>
    </header>

    <div class="skill-groups">
      <article class="skill-group">
        <h3>前端核心</h3>
        <ul>
          <li>精通 <strong>Vue2 / Vue3</strong>，具备复杂业务组件抽象与重构经验</li>
          <li>精通 <strong>Vue Router、Pinia、Vuex、JSX、TypeScript</strong>，可独立设计前端状态管理方案</li>
          <li>熟练使用 <strong>Element UI / Element Plus / Tailwind CSS</strong> 等前端 UI 框架与组件库，可进行二次封装与主题定制</li>
          <li>熟练使用 <strong>ECharts / V-Charts</strong> 开发大数据可视化报表，具备复杂图表配置、数据联动及性能优化经验</li>
        </ul>
      </article>

      <article class="skill-group">
        <h3>工程化 & 性能优化</h3>
        <ul>
          <li>熟悉 <strong>Vite / Webpack</strong> 项目构建与配置，具备包体积优化与性能调优经验</li>
          <li>熟悉 <strong>虚拟列表、懒加载、代码拆分、公共组件抽离</strong> 等性能优化手段</li>
          <li>熟悉 <strong>Git、Docker</strong> 基础部署与前端工程协作流程</li>
        </ul>
      </article>

      <article class="skill-group">
        <h3>多端开发 & 其他</h3>
        <ul>
          <li>熟悉 <strong>uni-app / 微信小程序 / H5</strong> 跨端开发及兼容性处理</li>
          <li>熟悉 <strong>Python（FastAPI / Django / REST Framework）</strong>，可进行基础全栈协作开发</li>
          <li>熟悉前后端部署发布上线流程</li>
        </ul>
      </article>
    </div>
  </section>

  <section id="ai-engineering" class="resume-section ai-section">
    <header class="section-heading">
      <span>03</span>
      <h2>AI 工程化 & 智能编码能力</h2>
    </header>

    <div class="ai-grid">
      <article>
        <span>01</span>
        <p>熟练使用 <strong>Codex / Antigravity IDE / Cursor / Claude Code</strong> 等 AI Coding 工具，可通过 <strong>CLI + Skills</strong> 驱动大模型进行结构化代码生成与重构</p>
      </article>
      <article>
        <span>02</span>
        <p>掌握 <strong>MCP</strong> 的工程化使用方式，能够为 AI 注入项目结构、技术栈约束与业务上下文，实现“按规范写代码”</p>
      </article>
      <article>
        <span>03</span>
        <p>能基于 <strong>最新 Skills 规范</strong> 设计 AI Coding Skill</p>
      </article>
      <article>
        <span>04</span>
        <p>具备 <strong>AI 辅助复杂重构与系统级生成的成功落地经验</strong>，而非简单代码补全</p>
      </article>
      <article>
        <span>05</span>
        <p>能通过 <strong>Mock / 约束 Schema / 目录结构约定</strong> 控制 AI 输出质量，避免“幻觉式代码”</p>
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
  margin-bottom: 28px;
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

.skill-groups {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.skill-group {
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface-muted);
}

.skill-group:first-child {
  grid-row: span 2;
}

.skill-group h3 {
  margin: 0 0 18px;
  color: var(--text);
  font-size: 1rem;
}

.skill-group ul {
  display: grid;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.skill-group li {
  position: relative;
  padding-left: 17px;
  color: var(--text-muted);
  font-size: 0.9375rem;
  line-height: 1.72;
}

.skill-group li::before {
  position: absolute;
  top: 0.68em;
  left: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
  content: '';
}

.skill-group strong,
.ai-grid strong {
  color: var(--text-subtle);
  font-weight: 650;
}

.ai-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}

.ai-grid article {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 12px;
  padding: 22px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.ai-grid article:last-child {
  grid-column: 1 / -1;
}

.ai-grid span {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
}

.ai-grid p {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.9375rem;
  line-height: 1.72;
}

@media (max-width: 760px) {
  .skill-groups,
  .ai-grid {
    grid-template-columns: 1fr;
  }

  .skill-group:first-child,
  .ai-grid article:last-child {
    grid-column: auto;
    grid-row: auto;
  }
}

@media (max-width: 700px) {
  .resume-section {
    padding: 34px 22px;
  }

  .skill-group {
    padding: 20px;
  }
}
</style>
