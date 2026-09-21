<template>
  <section id="other-skills" class="resume-section additional-section">
    <header class="section-heading">
      <span>05</span>
      <h2>其他技术能力</h2>
    </header>

    <div class="additional-grid">
      <article>
        <span aria-hidden="true">01</span>
        <p>软路由 OpenWrt 系统部署、DDNS 反向代理</p>
      </article>
      <article>
        <span aria-hidden="true">02</span>
        <p>Tailscale 组网、Docker 容器化部署与镜像管理</p>
      </article>
    </div>
  </section>

  <section id="education" class="resume-section education-section">
    <header class="section-heading">
      <span>06</span>
      <h2>教育背景</h2>
    </header>

    <article class="education-card">
      <div>
        <h3>苏州信息职业技术学院</h3>
        <p>计算机科学与应用 · 全日制专科</p>
      </div>
      <time>2017.09 — 2020.07</time>
    </article>
  </section>
</template>

<style scoped>
.resume-section {
  scroll-margin-top: 132px;
  padding: 48px 52px;
  border-bottom: 1px solid var(--line);
}

.education-section {
  border-bottom: 0;
}

.section-heading {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 26px;
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

.additional-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.additional-grid article {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 14px;
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--surface-muted);
}

.additional-grid span {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
}

.additional-grid p {
  margin: 0;
  color: var(--text-subtle);
  font-size: 0.9375rem;
  line-height: 1.65;
}

.education-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface-muted);
}

.education-card h3 {
  margin: 0;
  font-size: 1.0625rem;
}

.education-card p {
  margin: 7px 0 0;
  color: var(--text-muted);
  font-size: 0.875rem;
}

.education-card time {
  flex: 0 0 auto;
  color: var(--text-faint);
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

@media (max-width: 700px) {
  .resume-section {
    padding: 34px 22px;
  }

  .additional-grid {
    grid-template-columns: 1fr;
  }

  .education-card {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
