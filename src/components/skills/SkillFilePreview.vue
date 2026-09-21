<script setup lang="ts">
import { computed, shallowRef } from 'vue'

import MarkdownPreview from '@/components/skills/MarkdownPreview.vue'
import type { SkillFile } from '@/types/skill'

const props = defineProps<{
  file: SkillFile
}>()

defineEmits<{
  selectFile: [path: string]
}>()

const activeMode = shallowRef<'preview' | 'source'>('preview')
const copyLabel = shallowRef('复制')

const lines = computed(() => props.file.content.replace(/\n$/, '').split('\n'))
const formattedSize = computed(() => {
  if (props.file.bytes < 1024) return `${props.file.bytes} B`
  return `${(props.file.bytes / 1024).toFixed(1)} KB`
})

async function copyContent() {
  try {
    await navigator.clipboard.writeText(props.file.content)
    copyLabel.value = '已复制'
  } catch {
    copyLabel.value = '复制失败'
  }

  window.setTimeout(() => {
    copyLabel.value = '复制'
  }, 1600)
}

function downloadFile() {
  const url = URL.createObjectURL(new Blob([props.file.content], { type: 'text/plain;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = props.file.name
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <section class="file-preview" :aria-label="`${file.name} 文件预览`">
    <header class="file-toolbar">
      <div class="file-identity">
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M3 1.75h6l3.5 3.5v9H3v-12.5Z" />
          <path d="M9 1.75v3.5h3.5" />
        </svg>
        <strong>{{ file.path }}</strong>
        <span>{{ lines.length }} 行 · {{ formattedSize }}</span>
      </div>

      <div class="file-actions">
        <div class="mode-switch" aria-label="文件查看方式">
          <button type="button" :class="{ active: activeMode === 'preview' }" @click="activeMode = 'preview'">预览</button>
          <button type="button" :class="{ active: activeMode === 'source' }" @click="activeMode = 'source'">源码</button>
        </div>
        <button class="plain-action" type="button" @click="copyContent">{{ copyLabel }}</button>
        <button class="plain-action" type="button" @click="downloadFile">下载</button>
      </div>
    </header>

    <MarkdownPreview
      v-if="activeMode === 'preview' && file.language === 'Markdown'"
      :content="file.content"
      :current-path="file.path"
      @select-file="$emit('selectFile', $event)"
    />

    <div v-else class="source-view" role="region" aria-label="文件源码" tabindex="0">
      <div v-for="(line, index) in lines" :key="index" class="source-line">
        <span class="line-number" aria-hidden="true">{{ index + 1 }}</span>
        <code>{{ line || ' ' }}</code>
      </div>
    </div>
  </section>
</template>

<style scoped>
.file-preview {
  min-width: 0;
  background: var(--surface);
}

.file-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  min-height: 58px;
  padding: 10px 14px 10px 18px;
  border-bottom: 1px solid var(--line);
}

.file-identity,
.file-actions,
.mode-switch {
  display: flex;
  align-items: center;
}

.file-identity {
  min-width: 0;
  gap: 9px;
}

.file-identity svg {
  flex: 0 0 auto;
  width: 16px;
  height: 16px;
  fill: none;
  stroke: var(--text-muted);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.3;
}

.file-identity strong {
  overflow: hidden;
  color: var(--text-subtle);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.file-identity span {
  flex: 0 0 auto;
  color: var(--text-faint);
  font-size: 0.75rem;
}

.file-actions {
  flex: 0 0 auto;
  gap: 7px;
}

.mode-switch {
  padding: 3px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: var(--surface-muted);
}

.mode-switch button,
.plain-action {
  min-height: 30px;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  font: inherit;
  font-size: 0.75rem;
}

.mode-switch button {
  padding: 0 9px;
}

.mode-switch button.active {
  background: var(--surface);
  color: var(--text);
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.08);
}

.plain-action {
  padding: 0 9px;
  border: 1px solid var(--line);
}

.plain-action:hover {
  border-color: var(--line-strong);
  color: var(--text);
}

.source-view {
  min-height: 540px;
  overflow: auto;
  padding: 14px 0 28px;
  background: color-mix(in srgb, var(--surface), var(--surface-muted) 22%);
  font-family: var(--font-mono);
  font-size: 0.78125rem;
  line-height: 1.65;
}

.source-line {
  display: grid;
  grid-template-columns: 58px max-content;
  min-width: max-content;
  padding-right: 24px;
}

.source-line:hover {
  background: color-mix(in srgb, var(--skill-accent), transparent 94%);
}

.line-number {
  position: sticky;
  left: 0;
  padding-right: 14px;
  background: inherit;
  color: var(--text-faint);
  text-align: right;
  user-select: none;
}

.source-line code {
  color: var(--text-subtle);
  white-space: pre;
}

@media (max-width: 780px) {
  .file-toolbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .file-actions {
    width: 100%;
  }

  .mode-switch {
    margin-right: auto;
  }

  .file-identity span {
    display: none;
  }
}
</style>
