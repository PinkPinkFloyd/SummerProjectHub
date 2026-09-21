<script setup lang="ts">
import { computed } from 'vue'

import ProjectLinks from '@/components/ProjectLinks.vue'
import { findProjectBySlug, projectTypeLabels } from '@/data/projects'

const props = defineProps<{
  slug: string
}>()

const project = computed(() => findProjectBySlug(props.slug))
</script>

<template>
  <article v-if="project" class="detail-view" :style="{ '--project-accent': project.accent }">
    <RouterLink class="back-link" to="/">← 返回项目档案</RouterLink>

    <header class="detail-header">
      <div class="detail-copy">
        <p class="detail-code">{{ project.code }} · {{ projectTypeLabels[project.type] }}</p>
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
        <ProjectLinks :links="project.links" :demo-status="project.demoStatus" />
      </div>

      <div class="detail-signal" aria-hidden="true">
        <span>{{ project.shortTitle }}</span>
        <strong>{{ project.order.toString().padStart(2, '0') }}</strong>
      </div>
    </header>

    <section class="detail-section stack-section">
      <p class="section-label">TECH STACK</p>
      <ul class="detail-stack">
        <li v-for="item in project.stack" :key="item">{{ item }}</li>
      </ul>
    </section>

    <div class="detail-columns">
      <section class="detail-section">
        <p class="section-label">CAPABILITIES</p>
        <h2>主要能力</h2>
        <ol class="numbered-list">
          <li v-for="(item, index) in project.highlights" :key="item">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <p>{{ item }}</p>
          </li>
        </ol>
      </section>

      <section class="detail-section">
        <p class="section-label">ENGINEERING NOTES</p>
        <h2>工程拆解</h2>
        <div class="notes-block">
          <h3>技术难点</h3>
          <ul>
            <li v-for="item in project.challenges" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div class="notes-block">
          <h3>架构边界</h3>
          <ul>
            <li v-for="item in project.architecture" :key="item">{{ item }}</li>
          </ul>
        </div>
      </section>
    </div>
  </article>

  <section v-else class="missing-project">
    <span>404 / PROJECT NOT FOUND</span>
    <h1>没有找到这个项目</h1>
    <RouterLink to="/">返回项目首页</RouterLink>
  </section>
</template>

<style scoped>
.detail-view {
  display: grid;
  gap: 44px;
}

.back-link {
  width: fit-content;
  color: var(--text-muted);
  font-size: 0.875rem;
  text-decoration: none;
}

.back-link:hover {
  color: var(--project-accent);
}

.detail-header {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(260px, 0.6fr);
  gap: 30px;
  align-items: stretch;
}

.detail-copy {
  padding: 24px 0;
}

.detail-code,
.section-label {
  margin: 0;
  color: var(--project-accent);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
}

.detail-copy h1 {
  margin: 18px 0;
  font-size: clamp(2.5rem, 6vw, 5rem);
  line-height: 1.04;
  letter-spacing: -0.055em;
}

.detail-copy > p:not(.detail-code) {
  max-width: 760px;
  margin: 0 0 28px;
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.9;
}

.detail-signal {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 290px;
  overflow: hidden;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background:
    linear-gradient(90deg, color-mix(in srgb, var(--project-accent), transparent 92%) 1px, transparent 1px) 0 0 / 30px 30px,
    linear-gradient(color-mix(in srgb, var(--project-accent), transparent 92%) 1px, transparent 1px) 0 0 / 30px 30px,
    var(--surface);
}

.detail-signal::after {
  position: absolute;
  right: -80px;
  bottom: -80px;
  width: 230px;
  height: 230px;
  border: 1px solid color-mix(in srgb, var(--project-accent), transparent 45%);
  border-radius: 50%;
  content: '';
}

.detail-signal span {
  color: var(--project-accent);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
}

.detail-signal strong {
  color: var(--project-accent);
  font-family: var(--font-mono);
  font-size: 6.5rem;
  letter-spacing: -0.1em;
}

.detail-section {
  padding-top: 26px;
  border-top: 1px solid var(--line);
}

.stack-section {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 24px;
}

.detail-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.detail-stack li {
  padding: 9px 12px;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  color: var(--text-subtle);
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.detail-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 50px;
}

.detail-section h2 {
  margin: 8px 0 26px;
  font-size: 1.75rem;
}

.numbered-list {
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
}

.numbered-list li {
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid var(--line);
}

.numbered-list span {
  color: var(--project-accent);
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.numbered-list p {
  margin: 0;
  color: var(--text-subtle);
  line-height: 1.7;
}

.notes-block {
  padding: 18px 0;
  border-bottom: 1px solid var(--line);
}

.notes-block h3 {
  margin: 0 0 12px;
  color: var(--text);
  font-size: 0.9375rem;
}

.notes-block ul {
  display: grid;
  gap: 10px;
  margin: 0;
  padding-left: 18px;
  color: var(--text-muted);
  line-height: 1.7;
}

.missing-project {
  display: grid;
  min-height: 55vh;
  place-content: center;
  text-align: center;
}

.missing-project span {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.missing-project h1 {
  margin: 14px 0 24px;
}

.missing-project a {
  color: var(--text-subtle);
}

@media (max-width: 800px) {
  .detail-header,
  .detail-columns {
    grid-template-columns: 1fr;
  }

  .detail-signal {
    min-height: 220px;
  }

  .stack-section {
    grid-template-columns: 1fr;
  }
}
</style>
