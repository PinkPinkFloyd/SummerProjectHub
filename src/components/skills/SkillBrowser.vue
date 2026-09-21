<script setup lang="ts">
import { computed, shallowRef } from 'vue'

import FileTreeNode from '@/components/skills/FileTreeNode.vue'
import SkillFilePreview from '@/components/skills/SkillFilePreview.vue'
import type { SkillDefinition } from '@/types/skill'

const props = defineProps<{
  skill: SkillDefinition
}>()

const selectedPath = shallowRef(props.skill.entryFile)
const selectedFile = computed(
  () => props.skill.files.find((file) => file.path === selectedPath.value) ?? props.skill.files[0],
)

function selectFile(path: string) {
  if (props.skill.files.some((file) => file.path === path)) {
    selectedPath.value = path
  }
}
</script>

<template>
  <div class="skill-browser" :style="{ '--skill-accent': skill.accent }">
    <aside class="tree-panel" aria-label="技能文件树">
      <div class="tree-header">
        <span>FILES</span>
        <strong>{{ skill.files.length }}</strong>
      </div>
      <ul class="tree-root">
        <FileTreeNode
          v-for="node in skill.tree"
          :key="node.path"
          :node="node"
          :selected-path="selectedPath"
          @select="selectFile"
        />
      </ul>
    </aside>

    <SkillFilePreview
      v-if="selectedFile"
      :file="selectedFile"
      @select-file="selectFile"
    />
  </div>
</template>

<style scoped>
.skill-browser {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
  box-shadow: var(--shadow-card);
}

.tree-panel {
  min-width: 0;
  border-right: 1px solid var(--line);
  background: color-mix(in srgb, var(--surface), var(--surface-muted) 35%);
}

.tree-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 58px;
  padding: 0 15px;
  border-bottom: 1px solid var(--line);
  color: var(--text-faint);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.12em;
}

.tree-header strong {
  display: grid;
  min-width: 23px;
  height: 23px;
  place-items: center;
  border-radius: 999px;
  background: var(--surface-strong);
  color: var(--text-muted);
  font-weight: 500;
  letter-spacing: 0;
}

.tree-root {
  margin: 0;
  padding: 10px 0 18px;
  list-style: none;
}

@media (max-width: 850px) {
  .skill-browser {
    grid-template-columns: 1fr;
  }

  .tree-panel {
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }

  .tree-root {
    max-height: 230px;
    overflow: auto;
  }
}
</style>
