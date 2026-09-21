<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import type { Project } from '@/types/project'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <div v-if="projects.length" class="project-grid">
    <ProjectCard
      v-for="(project, index) in projects"
      :key="project.id"
      :project="project"
      :index="index"
    />
  </div>
  <div v-else class="empty-state">
    <strong>这个分类还没有项目</strong>
    <span>后续新增项目数据后会自动出现在这里。</span>
  </div>
</template>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.empty-state {
  display: grid;
  gap: 8px;
  padding: 48px;
  border: 1px dashed var(--line-strong);
  border-radius: 14px;
  color: var(--text-muted);
  text-align: center;
}

.empty-state strong {
  color: var(--text);
}

@media (max-width: 980px) {
  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
