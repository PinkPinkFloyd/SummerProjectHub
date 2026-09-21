<script setup lang="ts">
import type { SkillDefinition } from '@/types/skill'

defineProps<{
  skill: SkillDefinition
  index: number
}>()
</script>

<template>
  <RouterLink
    class="skill-card"
    :style="{ '--skill-accent': skill.accent }"
    :to="{ name: 'skill-detail', params: { slug: skill.slug } }"
  >
    <div class="card-meta">
      <span>{{ String(index + 1).padStart(2, '0') }}</span>
      <span><i aria-hidden="true"></i>{{ skill.category }}</span>
    </div>

    <div class="skill-mark" aria-hidden="true">SK</div>

    <div class="card-heading">
      <h2>{{ skill.title }}</h2>
      <p>{{ skill.shortTitle }}</p>
    </div>

    <p class="card-description">{{ skill.description }}</p>

    <div class="card-footer">
      <ul aria-label="技能标签">
        <li v-for="tag in skill.tags" :key="tag">{{ tag }}</li>
      </ul>
      <span class="file-count">{{ skill.files.length }} 个文件 <b>→</b></span>
    </div>
  </RouterLink>
</template>

<style scoped>
.skill-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 390px;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
  color: inherit;
  text-decoration: none;
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}

.skill-card:hover {
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--skill-accent), var(--line) 40%);
  box-shadow: var(--shadow-card);
}

.card-meta {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: var(--text-faint);
  font-size: 0.75rem;
}

.card-meta span:last-child {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--text-muted);
}

.card-meta i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--skill-accent);
}

.skill-mark {
  display: grid;
  width: 54px;
  height: 54px;
  margin-top: 32px;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--skill-accent), transparent 46%);
  border-radius: 12px;
  background: color-mix(in srgb, var(--skill-accent), transparent 92%);
  color: var(--skill-accent);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: -0.04em;
}

.card-heading {
  margin-top: 22px;
}

.card-heading h2 {
  margin: 0;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  line-height: 1.35;
  letter-spacing: -0.025em;
}

.card-heading p {
  margin: 6px 0 0;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.card-description {
  margin: 16px 0 22px;
  color: var(--text-muted);
  font-size: 0.9375rem;
  line-height: 1.72;
}

.card-footer {
  display: grid;
  gap: 16px;
  margin-top: auto;
  padding-top: 18px;
  border-top: 1px solid var(--line);
}

.card-footer ul {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.card-footer li {
  padding: 5px 8px;
  border-radius: 6px;
  background: var(--surface-muted);
  color: var(--text-muted);
  font-size: 0.75rem;
}

.file-count {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-subtle);
  font-size: 0.8125rem;
}

.file-count b {
  color: var(--skill-accent);
  font-size: 1rem;
  transition: transform 160ms ease;
}

.skill-card:hover .file-count b {
  transform: translateX(3px);
}
</style>
