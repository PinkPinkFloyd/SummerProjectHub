<script setup lang="ts">
export interface ResumeAnchor {
  id: string
  label: string
}

defineProps<{
  items: ResumeAnchor[]
  activeId: string
}>()

const emit = defineEmits<{
  navigate: [sectionId: string]
}>()
</script>

<template>
  <nav class="quick-nav" aria-label="简历章节导航">
    <div class="quick-nav-links">
      <a
        v-for="item in items"
        :key="item.id"
        :href="`#${item.id}`"
        :class="{ active: activeId === item.id }"
        @click.prevent="emit('navigate', item.id)"
      >
        {{ item.label }}
      </a>
    </div>
  </nav>
</template>

<style scoped>
.quick-nav {
  position: sticky;
  z-index: 12;
  top: 64px;
  display: flex;
  align-items: center;
  gap: 18px;
  margin-inline: -1px;
  padding: 11px 14px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: color-mix(in srgb, var(--bg) 92%, transparent);
  box-shadow: 0 8px 24px color-mix(in srgb, var(--bg), transparent 24%);
  backdrop-filter: blur(14px);
}

.quick-nav-links {
  display: flex;
  min-width: 0;
  gap: 4px;
  overflow-x: auto;
  scrollbar-width: none;
}

.quick-nav-links::-webkit-scrollbar {
  display: none;
}

.quick-nav-links a {
  flex: 0 0 auto;
  padding: 7px 10px;
  border-radius: 7px;
  color: var(--text-muted);
  font-size: 0.8125rem;
  text-decoration: none;
  transition: background 160ms ease, color 160ms ease;
}

.quick-nav-links a:hover {
  color: var(--text);
}

.quick-nav-links a.active {
  background: var(--text);
  color: var(--bg);
}

@media (max-width: 700px) {
  .quick-nav {
    gap: 10px;
    margin-inline: -14px;
    padding-inline: 14px;
    border-right: 0;
    border-left: 0;
    border-radius: 0;
  }

}
</style>
