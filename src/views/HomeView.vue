<script setup lang="ts">
import ProjectFilters from '@/components/ProjectFilters.vue'
import ProjectGrid from '@/components/ProjectGrid.vue'
import { useProjectCatalog } from '@/composables/useProjectCatalog'

const { activeFilter, filters, visibleProjects, selectFilter } = useProjectCatalog()
</script>

<template>
  <section class="home-view">
    <div class="intro-grid">
      <div class="intro-copy">
        <p class="eyebrow">SELECTED WORK / 2021—NOW</p>
        <h1>把复杂业务，<br />整理成可以直接体验的作品。</h1>
        <p class="intro-text">
          这里收录我从真实项目中抽离的前端组件、工程 Demo 与完整应用。
          每个项目都尽量保留问题背景、核心实现和可运行版本。
        </p>
      </div>

      <aside class="capability-panel" aria-label="项目能力范围">
        <div class="panel-label">ARCHIVE CAPABILITY</div>
        <ul>
          <li><span>01</span><strong>纯前端 Demo</strong><small>GitHub Pages / 静态部署</small></li>
          <li><span>02</span><strong>全栈项目</strong><small>前端、后端、API 与架构说明</small></li>
          <li><span>03</span><strong>线上项目</strong><small>直接关联已发布网址</small></li>
        </ul>
      </aside>
    </div>

    <div class="catalog-heading">
      <div>
        <p class="section-index">PROJECT INDEX</p>
        <h2>项目档案</h2>
      </div>
      <ProjectFilters
        :filters="filters"
        :active-filter="activeFilter"
        @select="selectFilter"
      />
    </div>

    <ProjectGrid :projects="visibleProjects" />
  </section>
</template>

<style scoped>
.home-view {
  display: grid;
  gap: 48px;
}

.intro-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(300px, 0.8fr);
  gap: 30px;
  align-items: stretch;
}

.intro-copy {
  padding: 12px 0 8px;
}

.eyebrow,
.section-index,
.panel-label {
  margin: 0;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.13em;
}

.intro-copy h1 {
  max-width: 820px;
  margin: 18px 0 22px;
  font-size: clamp(2.5rem, 6vw, 5.4rem);
  line-height: 1.03;
  letter-spacing: -0.055em;
}

.intro-text {
  max-width: 680px;
  margin: 0;
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.85;
}

.capability-panel {
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--surface);
}

.capability-panel ul {
  display: grid;
  gap: 0;
  margin: 22px 0 0;
  padding: 0;
  list-style: none;
}

.capability-panel li {
  display: grid;
  grid-template-columns: 34px 1fr;
  gap: 4px 12px;
  padding: 16px 0;
  border-top: 1px solid var(--line);
}

.capability-panel li > span {
  grid-row: 1 / span 2;
  color: var(--text-faint);
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.capability-panel strong {
  font-size: 0.9375rem;
}

.capability-panel small {
  color: var(--text-muted);
  font-size: 0.75rem;
  line-height: 1.5;
}

.catalog-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  padding-top: 8px;
}

.catalog-heading h2 {
  margin: 7px 0 0;
  font-size: clamp(1.75rem, 3vw, 2.4rem);
  letter-spacing: -0.035em;
}

@media (max-width: 850px) {
  .intro-grid {
    grid-template-columns: 1fr;
  }

  .capability-panel ul {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }

  .capability-panel li {
    grid-template-columns: 1fr;
  }

  .capability-panel li > span {
    grid-row: auto;
  }

  .catalog-heading {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 620px) {
  .home-view {
    gap: 36px;
  }

  .intro-copy h1 {
    font-size: clamp(2.35rem, 12vw, 3.75rem);
  }

  .capability-panel ul {
    grid-template-columns: 1fr;
  }
}
</style>
