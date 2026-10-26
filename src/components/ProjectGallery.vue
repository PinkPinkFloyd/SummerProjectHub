<script setup lang="ts">
import { shallowRef } from 'vue'

import MediaLightbox from '@/components/resume/MediaLightbox.vue'
import type { ProjectScreenshot } from '@/types/project'

defineProps<{
  screenshots: ProjectScreenshot[]
}>()

const activeIndex = shallowRef(0)
const isOpen = shallowRef(false)

function openScreenshot(index: number) {
  activeIndex.value = index
  isOpen.value = true
}
</script>

<template>
  <section class="project-gallery" aria-label="项目高清展示图">
    <div class="gallery-heading">
      <div>
        <p class="gallery-label">PROJECT GALLERY</p>
        <h2 class="gallery-title">项目展示</h2>
      </div>
      <p class="gallery-hint">{{ screenshots.length }} 张高清截图 · 点击放大浏览</p>
    </div>

    <div class="gallery-grid">
      <figure v-for="(screenshot, index) in screenshots" :key="screenshot.src" class="gallery-item">
        <button
          class="screenshot-button"
          type="button"
          :aria-label="`放大查看：${screenshot.caption}`"
          @click="openScreenshot(index)"
        >
          <img
            class="screenshot-image"
            :src="screenshot.src"
            :alt="screenshot.alt"
            width="2560"
            height="1347"
            loading="lazy"
            decoding="async"
          />
        </button>
        <figcaption class="screenshot-caption">
          <span>{{ screenshot.caption }}</span>
          <a :href="screenshot.src" target="_blank" rel="noopener noreferrer">查看原图 ↗</a>
        </figcaption>
      </figure>
    </div>

    <MediaLightbox
      :open="isOpen"
      :items="screenshots"
      :active-index="activeIndex"
      @close="isOpen = false"
      @select="activeIndex = $event"
    />
  </section>
</template>

<style scoped>
.project-gallery {
  min-width: 0;
  padding-top: 26px;
  border-top: 1px solid var(--line);
}

.gallery-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 26px;
}

.gallery-label {
  margin: 0;
  color: var(--project-accent);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
}

.gallery-title {
  margin: 8px 0 0;
  font-size: 1.75rem;
}

.gallery-hint {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.8125rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px 20px;
}

.gallery-item {
  min-width: 0;
  margin: 0;
}

.gallery-item:first-child {
  grid-column: 1 / -1;
}

.screenshot-button {
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface-muted);
  cursor: zoom-in;
}

.screenshot-button:hover,
.screenshot-button:focus-visible {
  outline: 2px solid var(--project-accent);
  outline-offset: 3px;
}

.screenshot-image {
  display: block;
  width: 100%;
  height: auto;
}

.screenshot-caption {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 12px;
  color: var(--text-muted);
  font-size: 0.8125rem;
  line-height: 1.6;
}

.screenshot-caption a {
  flex-shrink: 0;
  color: var(--project-accent);
  text-underline-offset: 4px;
}

@media (max-width: 700px) {
  .gallery-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
