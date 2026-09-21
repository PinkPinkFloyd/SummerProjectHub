<script setup lang="ts">
import { shallowRef } from 'vue'

import type { SkillTreeNode } from '@/types/skill'

defineOptions({ name: 'FileTreeNode' })

defineProps<{
  node: SkillTreeNode
  selectedPath: string
  depth?: number
}>()

defineEmits<{
  select: [path: string]
}>()

const isOpen = shallowRef(true)
</script>

<template>
  <li class="tree-node">
    <button
      v-if="node.type === 'directory'"
      class="tree-row directory-row"
      type="button"
      :style="{ paddingLeft: `${10 + (depth ?? 0) * 16}px` }"
      :aria-expanded="isOpen"
      @click="isOpen = !isOpen"
    >
      <svg class="chevron" :class="{ open: isOpen }" viewBox="0 0 16 16" aria-hidden="true">
        <path d="m6 3 5 5-5 5" />
      </svg>
      <svg class="file-icon" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M1.75 3.5h4l1.25 1.5h7.25v7.75a1.5 1.5 0 0 1-1.5 1.5H3.25a1.5 1.5 0 0 1-1.5-1.5V3.5Z" />
      </svg>
      <span>{{ node.name }}</span>
    </button>

    <button
      v-else
      class="tree-row file-row"
      :class="{ selected: node.path === selectedPath }"
      type="button"
      :style="{ paddingLeft: `${30 + (depth ?? 0) * 16}px` }"
      @click="$emit('select', node.path)"
    >
      <svg class="file-icon" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M3 1.75h6l3.5 3.5v9H3v-12.5Z" />
        <path d="M9 1.75v3.5h3.5" />
      </svg>
      <span>{{ node.name }}</span>
    </button>

    <ul v-if="node.type === 'directory' && isOpen" class="tree-children">
      <FileTreeNode
        v-for="child in node.children"
        :key="child.path"
        :node="child"
        :selected-path="selectedPath"
        :depth="(depth ?? 0) + 1"
        @select="$emit('select', $event)"
      />
    </ul>
  </li>
</template>

<style scoped>
.tree-node,
.tree-children {
  margin: 0;
  padding: 0;
  list-style: none;
}

.tree-row {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  min-height: 38px;
  padding-right: 10px;
  border: 0;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  font: inherit;
  font-size: 0.8125rem;
  text-align: left;
}

.tree-row:hover {
  background: var(--surface-muted);
  color: var(--text);
}

.tree-row.selected {
  background: color-mix(in srgb, var(--skill-accent), transparent 90%);
  color: var(--skill-accent);
}

.tree-row span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.chevron,
.file-icon {
  flex: 0 0 auto;
  width: 15px;
  height: 15px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.25;
}

.chevron {
  width: 12px;
  transition: transform 140ms ease;
}

.chevron.open {
  transform: rotate(90deg);
}
</style>
