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
    <div class="card-body">
      <div class="card-meta">
        <span class="project-number">{{ projectNumber }}</span>
        <span class="project-type"><i aria-hidden="true"></i>{{ projectTypeLabels[project.type] }}</span>
      </div>

      <div class="card-heading">
        <h2>{{ project.title }}</h2>
        <p>{{ project.shortTitle }}</p>
      </div>

      <p class="card-summary">{{ project.summary }}</p>

      <ul class="stack-list" aria-label="技术栈">
        <li v-for="item in project.stack.slice(0, 4)" :key="item">{{ item }}</li>
      </ul>

      <div class="card-actions">
        <ProjectLinks
          compact
          :links="project.links"
          :demo-status="project.demoStatus"
          :details-to="{ name: 'project-detail', params: { slug: project.slug } }"
          :show-unavailable="false"
        />
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  min-width: 0;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}

.project-card:hover {
  transform: translateY(-2px);
  border-color: var(--line-strong);
  box-shadow: var(--shadow-card);
}

.card-body {
  display: flex;
  flex-direction: column;
  min-height: 360px;
  padding: 24px;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: var(--text-faint);
  font-size: 0.75rem;
}

.project-number {
  font-variant-numeric: tabular-nums;
}

.project-type {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--text-muted);
}

.project-type i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--project-accent);
}

.card-heading {
  margin-top: 32px;
}

.card-heading p {
  margin: 7px 0 0;
  color: var(--text-muted);
  font-size: 0.8125rem;
}

.card-heading h2 {
  margin: 0;
  font-size: clamp(1.25rem, 2vw, 1.55rem);
  line-height: 1.35;
}

.card-summary {
  min-height: 52px;
  margin: 18px 0 20px;
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
  padding: 5px 9px;
  border-radius: 6px;
  background: var(--surface-muted);
  color: var(--text-muted);
  font-size: 0.75rem;
}

.card-actions {
  margin-top: auto;
  padding-top: 18px;
  border-top: 1px solid var(--line);
}
</style>
