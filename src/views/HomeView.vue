<script setup lang="ts">
import ProjectFilters from '@/components/ProjectFilters.vue'
import ProjectGrid from '@/components/ProjectGrid.vue'
import { useProjectCatalog } from '@/composables/useProjectCatalog'

const { activeFilter, filters, visibleProjects, selectFilter } = useProjectCatalog()
</script>

<template>
  <section class="home-view">
    <div class="catalog-heading">
      <div>
        <h1>项目档案</h1>
        <span>{{ filters[0]?.count ?? 0 }} 个项目</span>
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
  gap: 30px;
}

.catalog-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--line);
}

.catalog-heading > div:first-child {
  display: flex;
  align-items: baseline;
  gap: 14px;
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

@media (max-width: 850px) {
  .catalog-heading {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 620px) {
  .home-view {
    gap: 24px;
  }
}
</style>
