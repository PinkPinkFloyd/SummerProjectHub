<script setup lang="ts">
import type { ProjectSite } from '@/types/project'

defineProps<{
  sites: ProjectSite[]
  accessNote?: string
  compact?: boolean
}>()
</script>

<template>
  <div class="project-sites" :class="{ compact }">
    <div class="site-grid">
      <article v-for="(site, index) in sites" :key="site.url" class="site-entry">
        <a v-if="compact" class="site-row" :href="site.url" target="_blank" rel="noopener noreferrer">
          <span class="site-name">{{ site.name }}</span>
          <span class="site-status" :class="{ restricted: site.requiresLogin }">
            {{ site.requiresLogin ? '需测试账号' : '公开访问' }}
          </span>
          <span class="site-arrow" aria-hidden="true">↗</span>
        </a>
        <template v-else>
          <div class="site-meta">
            <span class="site-number">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="site-status" :class="{ restricted: site.requiresLogin }">
              {{ site.requiresLogin ? '需测试账号' : '公开访问' }}
            </span>
          </div>
          <h3 class="site-title">{{ site.name }}</h3>
          <p class="site-description">{{ site.description }}</p>
          <a class="site-button" :href="site.url" :aria-label="'打开' + site.name" target="_blank" rel="noopener noreferrer">
            {{ site.requiresLogin ? '进入系统' : '访问官网' }} <span aria-hidden="true">↗</span>
          </a>
        </template>
      </article>
    </div>
    <div v-if="accessNote" class="access-note">
      <p class="access-copy">{{ accessNote }}</p>
      <RouterLink class="contact-link" to="/resume">联系本人获取测试账号 →</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.project-sites {
  display: grid;
  gap: 20px;
}

.site-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.site-entry {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
}

.site-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.site-number {
  color: var(--text-faint);
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.site-status {
  flex-shrink: 0;
  padding: 4px 7px;
  border-radius: 5px;
  background: var(--surface-muted);
  color: var(--text-muted);
  font-size: 0.6875rem;
}

.site-status.restricted {
  background: color-mix(in srgb, var(--project-accent), transparent 92%);
  color: var(--project-accent);
}

.site-title {
  margin: 24px 0 12px;
  font-size: 1.125rem;
  line-height: 1.5;
}

.site-description {
  flex: 1;
  margin: 0 0 24px;
  color: var(--text-muted);
  font-size: 0.875rem;
  line-height: 1.8;
}

.site-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 44px;
  padding: 0 14px;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  color: var(--text);
  font-size: 0.8125rem;
  text-decoration: none;
}

.site-button:hover {
  border-color: var(--project-accent);
  color: var(--project-accent);
}

.access-note {
  padding: 16px 20px;
  border-left: 3px solid var(--project-accent);
  border-radius: 0 8px 8px 0;
  background: var(--surface-muted);
}

.access-copy {
  margin: 0 0 8px;
  color: var(--text-subtle);
  font-size: 0.875rem;
  line-height: 1.75;
}

.contact-link {
  color: var(--project-accent);
  font-size: 0.8125rem;
  text-underline-offset: 4px;
}

.compact {
  gap: 14px;
  margin-bottom: 18px;
}

.compact .site-grid {
  grid-template-columns: 1fr;
  gap: 8px;
}

.compact .site-entry {
  padding: 0;
  border-radius: 8px;
}

.site-row {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 10px;
  color: var(--text-subtle);
  text-decoration: none;
}

.site-row:hover {
  color: var(--project-accent);
  background: var(--surface-muted);
  border-radius: 8px;
}

.site-name {
  flex: 1;
  min-width: 0;
  font-size: 0.8125rem;
  line-height: 1.5;
}

.site-arrow {
  color: var(--text-muted);
}

.compact .access-note {
  padding: 12px;
}

.compact .access-copy {
  font-size: 0.75rem;
}

.compact .contact-link {
  font-size: 0.75rem;
}

@media (max-width: 760px) {
  .site-grid {
    grid-template-columns: 1fr;
  }
}
</style>
