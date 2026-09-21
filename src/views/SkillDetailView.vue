<script setup lang="ts">
import { computed } from 'vue'

import SkillBrowser from '@/components/skills/SkillBrowser.vue'
import { findSkillBySlug } from '@/data/skills'

const props = defineProps<{
  slug: string
}>()

const skill = computed(() => findSkillBySlug(props.slug))
</script>

<template>
  <article v-if="skill" class="skill-detail" :style="{ '--skill-accent': skill.accent }">
    <nav class="breadcrumb" aria-label="面包屑导航">
      <RouterLink to="/skills">技能 Skill</RouterLink>
      <span>/</span>
      <strong>{{ skill.shortTitle }}</strong>
    </nav>

    <header class="skill-header">
      <div class="skill-heading">
        <p>{{ skill.category }} · v{{ skill.version }}</p>
        <h1>{{ skill.title }}</h1>
        <span>{{ skill.description }}</span>
      </div>

      <dl class="skill-facts">
        <div>
          <dt>FILES</dt>
          <dd>{{ String(skill.files.length).padStart(2, '0') }}</dd>
        </div>
        <div>
          <dt>FORMAT</dt>
          <dd>MD</dd>
        </div>
      </dl>
    </header>

    <SkillBrowser :key="skill.slug" :skill="skill" />
  </article>

  <section v-else class="missing-skill">
    <span>404 / SKILL NOT FOUND</span>
    <h1>没有找到这个技能</h1>
    <RouterLink to="/skills">返回技能列表</RouterLink>
  </section>
</template>

<style scoped>
.skill-detail {
  display: grid;
  gap: 34px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 9px;
  min-width: 0;
  color: var(--text-faint);
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.breadcrumb a {
  color: var(--text-muted);
  text-decoration: none;
}

.breadcrumb a:hover {
  color: var(--skill-accent);
}

.breadcrumb strong {
  overflow: hidden;
  color: var(--text-subtle);
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.skill-header {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 36px;
  align-items: end;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--line);
}

.skill-heading > p {
  margin: 0 0 14px;
  color: var(--skill-accent);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

.skill-heading h1 {
  max-width: 820px;
  margin: 0;
  font-size: clamp(2.2rem, 5vw, 4.5rem);
  line-height: 1.08;
  letter-spacing: -0.055em;
}

.skill-heading > span {
  display: block;
  max-width: 760px;
  margin-top: 20px;
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.8;
}

.skill-facts {
  display: flex;
  margin: 0;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
}

.skill-facts div {
  display: grid;
  min-width: 92px;
  gap: 6px;
  padding: 16px 18px;
}

.skill-facts div + div {
  border-left: 1px solid var(--line);
}

.skill-facts dt {
  color: var(--text-faint);
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: 0.12em;
}

.skill-facts dd {
  margin: 0;
  color: var(--skill-accent);
  font-family: var(--font-mono);
  font-size: 1.25rem;
  font-weight: 700;
}

.missing-skill {
  display: grid;
  min-height: 55vh;
  place-content: center;
  text-align: center;
}

.missing-skill span {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.missing-skill h1 {
  margin: 14px 0 24px;
}

.missing-skill a {
  color: var(--text-subtle);
}

@media (max-width: 760px) {
  .skill-header {
    grid-template-columns: 1fr;
  }

  .skill-facts {
    width: fit-content;
  }
}
</style>
