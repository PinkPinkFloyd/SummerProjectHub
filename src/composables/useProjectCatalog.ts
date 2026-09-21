import { computed, readonly, shallowRef } from 'vue'

import { projects, projectTypeLabels } from '@/data/projects'
import type { ProjectType } from '@/types/project'

type ActiveFilter = 'all' | ProjectType

export function useProjectCatalog() {
  const activeFilter = shallowRef<ActiveFilter>('all')

  const sortedProjects = computed(() => [...projects].sort((a, b) => a.order - b.order))

  const visibleProjects = computed(() => {
    if (activeFilter.value === 'all') return sortedProjects.value
    return sortedProjects.value.filter((project) => project.type === activeFilter.value)
  })

  const filters = computed(() => {
    const typeFilters = Object.entries(projectTypeLabels)
      .map(([value, label]) => ({
        value: value as ProjectType,
        label,
        count: projects.filter((project) => project.type === value).length,
      }))
      .filter((filter) => filter.count > 0)

    return [{ value: 'all' as const, label: '全部项目', count: projects.length }, ...typeFilters]
  })

  function selectFilter(filter: ActiveFilter) {
    activeFilter.value = filter
  }

  return {
    activeFilter: readonly(activeFilter),
    filters,
    visibleProjects,
    selectFilter,
  }
}
