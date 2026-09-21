<script setup lang="ts">
import type { DemoStatus, ProjectLinks } from '@/types/project'

defineProps<{
  links: ProjectLinks
  demoStatus: DemoStatus
  compact?: boolean
}>()
</script>

<template>
  <div class="project-links" :class="{ compact }">
    <a v-if="links.demo" class="link-button primary" :href="links.demo" target="_blank" rel="noreferrer">
      在线体验 ↗
    </a>
    <a v-else-if="links.website" class="link-button primary" :href="links.website" target="_blank" rel="noreferrer">
      访问项目 ↗
    </a>
    <span v-else class="link-button disabled">
      {{ demoStatus === 'offline' ? '演示暂不可用' : '在线体验准备中' }}
    </span>

    <a v-if="links.source" class="link-button" :href="links.source" target="_blank" rel="noreferrer">源码 ↗</a>
    <a v-if="links.frontendSource" class="link-button" :href="links.frontendSource" target="_blank" rel="noreferrer">前端源码 ↗</a>
    <a v-if="links.backendSource" class="link-button" :href="links.backendSource" target="_blank" rel="noreferrer">后端源码 ↗</a>
    <a v-if="links.apiDocs" class="link-button" :href="links.apiDocs" target="_blank" rel="noreferrer">API 文档 ↗</a>
  </div>
</template>

<style scoped>
.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}

.link-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 14px;
  border: 1px solid var(--line-strong);
  border-radius: 9px;
  color: var(--text-subtle);
  font-size: 0.8125rem;
  text-decoration: none;
  transition: transform 160ms ease, border-color 160ms ease, color 160ms ease;
}

.link-button:not(.disabled):hover {
  transform: translateY(-1px);
  border-color: var(--accent);
  color: var(--text);
}

.link-button.primary {
  border-color: var(--accent);
  background: var(--accent);
  color: #06100d;
  font-weight: 700;
}

.link-button.disabled {
  border-style: dashed;
  color: var(--text-faint);
  cursor: not-allowed;
}

.compact .link-button {
  min-height: 34px;
  padding: 0 11px;
  font-size: 0.75rem;
}
</style>
