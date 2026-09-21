<script setup lang="ts">
import { parseInline } from '@/utils/markdown'
import type { InlineToken } from '@/utils/markdown'

defineOptions({ name: 'MarkdownInline' })

const props = defineProps<{
  tokens: InlineToken[]
  currentPath: string
}>()

const emit = defineEmits<{
  selectFile: [path: string]
}>()

function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href)
}

function resolveInternalPath(href: string): string | undefined {
  if (!href || href.startsWith('#') || isExternal(href)) return undefined

  try {
    const resolved = new URL(href, `https://skill.local/${props.currentPath}`)
    return decodeURIComponent(resolved.pathname.replace(/^\//, ''))
  } catch {
    return undefined
  }
}

function handleInternalLink(href: string) {
  const path = resolveInternalPath(href)
  if (path) emit('selectFile', path)
}
</script>

<template>
  <template v-for="(token, index) in tokens" :key="`${index}-${token.content}`">
    <strong v-if="token.type === 'strong'">
      <MarkdownInline
        :tokens="parseInline(token.content)"
        :current-path="currentPath"
        @select-file="$emit('selectFile', $event)"
      />
    </strong>
    <code v-else-if="token.type === 'code'">{{ token.content }}</code>
    <a
      v-else-if="token.type === 'link' && isExternal(token.href)"
      :href="token.href"
      target="_blank"
      rel="noreferrer"
    >{{ token.content }}</a>
    <button
      v-else-if="token.type === 'link' && resolveInternalPath(token.href)"
      class="internal-link"
      type="button"
      @click="handleInternalLink(token.href)"
    >{{ token.content }}</button>
    <span v-else>{{ token.content }}</span>
  </template>
</template>

<style scoped>
.internal-link {
  display: inline;
  padding: 0;
  border: 0;
  background: none;
  color: var(--accent);
  cursor: pointer;
  font: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
