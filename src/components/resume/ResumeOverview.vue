<template>
  <section id="profile" class="resume-section overview-section">
    <header class="section-heading">
      <span>01</span>
      <h2>个人简介</h2>
    </header>

    <p class="overview-copy">
      拥有 5 年 Web 前端开发经验，1 年全栈偏前端经验，曾任天天供应链前端组长及公司内部 Vue3
      技术导师、智慧芽项目组前端负责人。长期参与企业级后台管理系统、电商全栈、专利审查 Diff
      开发、uni-app 小程序等项目。
    </p>

    <a class="project-link" href="https://pinkpinkfloyd.github.io/SummerProjectHub/#/" target="_blank" rel="noreferrer">
      <span>线上项目 Demo</span>
      <strong>pinkpinkfloyd.github.io/SummerProjectHub</strong>
      <b aria-hidden="true">↗</b>
    </a>
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
  margin-bottom: 24px;
}

.section-heading span {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(1.65rem, 3vw, 2.25rem);
  letter-spacing: -0.04em;
}

.overview-copy {
  max-width: 860px;
  margin: 0;
  color: var(--text-subtle);
  font-size: 1.0625rem;
  line-height: 1.95;
}

.project-link {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  max-width: 680px;
  gap: 14px;
  margin-top: 30px;
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--surface-muted);
  color: var(--text-muted);
  font-size: 0.8125rem;
  text-decoration: none;
}

.project-link strong {
  overflow: hidden;
  color: var(--text-subtle);
  font-family: var(--font-mono);
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-link b {
  color: var(--accent);
  transition: transform 160ms ease;
}

.project-link:hover b {
  transform: translate(2px, -2px);
}

@media (max-width: 700px) {
  .resume-section {
    padding: 34px 22px;
  }

  .project-link {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .project-link span {
    grid-column: 1 / -1;
  }
}
</style>
