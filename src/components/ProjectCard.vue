<script setup lang="ts">
import { computed } from 'vue'

import ProjectLinks from '@/components/ProjectLinks.vue'
import { projectTypeLabels } from '@/data/projects'
import type { Project } from '@/types/project'

const props = defineProps<{
  project: Project
  index: number
}>()

const projectNumber = computed(() => String(props.index + 1).padStart(2, '0'))
</script>

<template>
  <article class="project-card" :style="{ '--project-accent': project.accent }">
    <div class="card-visual" aria-hidden="true">
      <span class="visual-index">{{ projectNumber }}</span>
      <span class="visual-code">{{ project.code }}</span>
      <div class="visual-lines">
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>

    <div class="card-body">
      <div class="card-meta">
        <span>{{ projectTypeLabels[project.type] }}</span>
        <span>{{ project.demoStatus === 'live' ? 'LIVE' : 'BUILD READY' }}</span>
      </div>

      <div class="card-heading">
        <p>{{ project.shortTitle }}</p>
        <h2>{{ project.title }}</h2>
      </div>

      <p class="card-summary">{{ project.summary }}</p>

      <ul class="stack-list" aria-label="技术栈">
        <li v-for="item in project.stack.slice(0, 4)" :key="item">{{ item }}</li>
      </ul>

      <div class="card-actions">
        <RouterLink class="detail-link" :to="{ name: 'project-detail', params: { slug: project.slug } }">
          查看项目详情 <span>→</span>
        </RouterLink>
        <ProjectLinks compact :links="project.links" :demo-status="project.demoStatus" />
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  display: grid;
  grid-template-rows: 168px 1fr;
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: linear-gradient(150deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0.01));
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--project-accent), transparent 55%);
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.22);
}

.card-visual {
  position: relative;
  overflow: hidden;
  padding: 20px;
  border-bottom: 1px solid var(--line);
  background:
    linear-gradient(90deg, color-mix(in srgb, var(--project-accent), transparent 92%) 1px, transparent 1px) 0 0 / 32px 32px,
    linear-gradient(color-mix(in srgb, var(--project-accent), transparent 92%) 1px, transparent 1px) 0 0 / 32px 32px,
    #09151a;
}

.card-visual::after {
  position: absolute;
  right: -28px;
  bottom: -70px;
  width: 170px;
  height: 170px;
  border: 1px solid color-mix(in srgb, var(--project-accent), transparent 50%);
  border-radius: 50%;
  box-shadow: 0 0 60px color-mix(in srgb, var(--project-accent), transparent 86%);
  content: '';
}

.visual-index {
  color: var(--project-accent);
  font-family: var(--font-mono);
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: -0.08em;
}

.visual-code {
  position: absolute;
  top: 26px;
  right: 20px;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.12em;
}

.visual-lines {
  position: absolute;
  bottom: 22px;
  left: 22px;
  display: grid;
  gap: 7px;
  width: 48%;
}

.visual-lines i {
  display: block;
  height: 3px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--project-accent), transparent 35%);
}

.visual-lines i:nth-child(2) {
  width: 72%;
}

.visual-lines i:nth-child(3) {
  width: 40%;
}

.card-body {
  display: flex;
  flex-direction: column;
  padding: 22px;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: var(--text-faint);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.08em;
}

.card-heading {
  margin-top: 22px;
}

.card-heading p {
  margin: 0 0 5px;
  color: var(--project-accent);
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.card-heading h2 {
  margin: 0;
  font-size: clamp(1.25rem, 2vw, 1.55rem);
  line-height: 1.25;
}

.card-summary {
  min-height: 52px;
  margin: 14px 0 18px;
  color: var(--text-muted);
  font-size: 0.9375rem;
  line-height: 1.72;
}

.stack-list {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 0 0 24px;
  padding: 0;
  list-style: none;
}

.stack-list li {
  padding: 5px 8px;
  border: 1px solid var(--line);
  border-radius: 6px;
  color: var(--text-subtle);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
}

.card-actions {
  display: grid;
  gap: 14px;
  margin-top: auto;
}

.detail-link {
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid var(--line);
  color: var(--text);
  font-size: 0.875rem;
  font-weight: 700;
  text-decoration: none;
}

.detail-link span {
  color: var(--project-accent);
}
</style>
