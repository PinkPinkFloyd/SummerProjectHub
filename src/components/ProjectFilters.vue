<script setup lang="ts">
import type { ProjectFilter, ProjectType } from '@/types/project'

type FilterValue = 'all' | ProjectType

defineProps<{
  filters: ProjectFilter[]
  activeFilter: FilterValue
}>()

const emit = defineEmits<{
  select: [filter: FilterValue]
}>()
</script>

<template>
  <div class="filter-row" role="group" aria-label="项目分类">
    <button
      v-for="filter in filters"
      :key="filter.value"
      class="filter-button"
      :class="{ active: filter.value === activeFilter }"
      type="button"
      :aria-pressed="filter.value === activeFilter"
      @click="emit('select', filter.value)"
    >
      <span>{{ filter.label }}</span>
      <span class="filter-count">{{ String(filter.count).padStart(2, '0') }}</span>
    </button>
  </div>
</template>

<style scoped>
.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filter-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 9px 12px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  font: inherit;
  font-size: 0.875rem;
  transition: border-color 160ms ease, background 160ms ease, color 160ms ease;
}

.filter-button:hover {
  border-color: var(--line-strong);
  color: var(--text);
}

.filter-button.active {
  border-color: color-mix(in srgb, var(--accent), transparent 46%);
  background: rgba(88, 246, 199, 0.08);
  color: var(--accent);
}

.filter-count {
  color: var(--text-faint);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
}
</style>
