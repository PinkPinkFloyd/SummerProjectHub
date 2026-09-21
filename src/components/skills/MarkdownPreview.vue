<script setup lang="ts">
import { computed } from 'vue'

import MarkdownInline from '@/components/skills/MarkdownInline.vue'
import { parseMarkdown } from '@/utils/markdown'

const props = defineProps<{
  content: string
  currentPath: string
}>()

defineEmits<{
  selectFile: [path: string]
}>()

const blocks = computed(() => parseMarkdown(props.content))
</script>

<template>
  <article class="markdown-body">
    <template v-for="(block, index) in blocks" :key="index">
      <component :is="`h${block.level}`" v-if="block.type === 'heading'" class="markdown-heading">
        <MarkdownInline
          :tokens="block.content"
          :current-path="currentPath"
          @select-file="$emit('selectFile', $event)"
        />
      </component>

      <p v-else-if="block.type === 'paragraph'" class="markdown-paragraph">
        <MarkdownInline
          :tokens="block.content"
          :current-path="currentPath"
          @select-file="$emit('selectFile', $event)"
        />
      </p>

      <blockquote v-else-if="block.type === 'quote'" class="markdown-quote">
        <MarkdownInline
          :tokens="block.content"
          :current-path="currentPath"
          @select-file="$emit('selectFile', $event)"
        />
      </blockquote>

      <component :is="block.ordered ? 'ol' : 'ul'" v-else-if="block.type === 'list'" class="markdown-list">
        <li v-for="(item, itemIndex) in block.items" :key="itemIndex">
          <MarkdownInline
            :tokens="item"
            :current-path="currentPath"
            @select-file="$emit('selectFile', $event)"
          />
        </li>
      </component>

      <div v-else-if="block.type === 'table'" class="markdown-table-wrap">
        <table class="markdown-table">
          <thead>
            <tr>
              <th v-for="(header, headerIndex) in block.headers" :key="headerIndex">
                <MarkdownInline
                  :tokens="header"
                  :current-path="currentPath"
                  @select-file="$emit('selectFile', $event)"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rowIndex) in block.rows" :key="rowIndex">
              <td v-for="(cell, cellIndex) in row" :key="cellIndex">
                <MarkdownInline
                  :tokens="cell"
                  :current-path="currentPath"
                  @select-file="$emit('selectFile', $event)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-else-if="block.type === 'code'" class="markdown-code">
        <span v-if="block.language">{{ block.language }}</span>
        <pre><code>{{ block.content }}</code></pre>
      </div>

      <hr v-else class="markdown-rule" />
    </template>
  </article>
</template>

<style scoped>
.markdown-body {
  width: min(100%, 860px);
  padding: 32px 36px 56px;
  color: var(--text-subtle);
  font-size: 1rem;
  line-height: 1.8;
}

.markdown-heading {
  margin: 34px 0 14px;
  color: var(--text);
  line-height: 1.3;
  letter-spacing: -0.025em;
}

.markdown-heading:first-child {
  margin-top: 0;
}

h1.markdown-heading {
  padding-bottom: 14px;
  border-bottom: 1px solid var(--line);
  font-size: 2rem;
}

h2.markdown-heading {
  padding-bottom: 10px;
  border-bottom: 1px solid var(--line);
  font-size: 1.5rem;
}

h3.markdown-heading {
  font-size: 1.2rem;
}

.markdown-paragraph {
  margin: 0 0 16px;
}

.markdown-list {
  display: grid;
  gap: 7px;
  margin: 0 0 18px;
  padding-left: 26px;
}

.markdown-quote {
  margin: 18px 0;
  padding: 8px 18px;
  border-left: 3px solid var(--line-strong);
  color: var(--text-muted);
}

.markdown-table-wrap {
  margin: 20px 0;
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: 9px;
}

.markdown-table {
  width: 100%;
  min-width: 520px;
  border-collapse: collapse;
  font-size: 0.875rem;
  line-height: 1.55;
}

.markdown-table th,
.markdown-table td {
  padding: 11px 13px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  text-align: left;
  vertical-align: top;
}

.markdown-table th:last-child,
.markdown-table td:last-child {
  border-right: 0;
}

.markdown-table tr:last-child td {
  border-bottom: 0;
}

.markdown-table th {
  background: var(--surface-muted);
  color: var(--text);
  font-weight: 600;
}

.markdown-code {
  position: relative;
  margin: 20px 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--surface-muted);
}

.markdown-code > span {
  position: absolute;
  top: 10px;
  right: 12px;
  color: var(--text-faint);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  text-transform: uppercase;
}

.markdown-code pre {
  margin: 0;
  overflow: auto;
  padding: 20px;
}

.markdown-code code {
  color: var(--text-subtle);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  line-height: 1.65;
}

.markdown-rule {
  margin: 30px 0;
  border: 0;
  border-top: 1px solid var(--line);
}

.markdown-body :deep(a),
.markdown-body :deep(.internal-link) {
  color: var(--accent);
}

.markdown-body :deep(code:not(.markdown-code code)) {
  padding: 0.15em 0.36em;
  border-radius: 5px;
  background: var(--surface-muted);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.88em;
}

@media (max-width: 720px) {
  .markdown-body {
    padding: 24px 20px 42px;
  }
}
</style>
