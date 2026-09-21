<script setup lang="ts">
import SkillCard from '@/components/skills/SkillCard.vue'
import { skills } from '@/data/skills'
</script>

<template>
  <section class="skills-view">
    <div class="catalog-heading">
      <div>
        <p>AI DEVELOPMENT TOOLKIT</p>
        <h1>技能 Skills</h1>
        <span>{{ skills.length }} 个技能</span>
      </div>
      <p class="catalog-intro">把开发过程中沉淀的工作流、约束与参考资料，整理成可以直接阅读和复用的技能档案。</p>
    </div>

    <div class="skill-grid">
      <SkillCard
        v-for="(skill, index) in skills"
        :key="skill.slug"
        :skill="skill"
        :index="index"
      />
    </div>
  </section>
</template>

<style scoped>
.skills-view {
  display: grid;
  gap: 30px;
}

.catalog-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 36px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--line);
}

.catalog-heading > div {
  display: grid;
  grid-template-columns: auto auto;
  align-items: baseline;
  gap: 0 14px;
}

.catalog-heading > div > p {
  grid-column: 1 / -1;
  margin: 0 0 10px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.13em;
}

.catalog-heading h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.045em;
}

.catalog-heading span {
  color: var(--text-muted);
  font-size: 0.875rem;
}

.catalog-intro {
  max-width: 500px;
  margin: 0;
  color: var(--text-muted);
  font-size: 0.9375rem;
  line-height: 1.75;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

@media (max-width: 980px) {
  .skill-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .catalog-heading {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 680px) {
  .skill-grid {
    grid-template-columns: 1fr;
  }
}
</style>
