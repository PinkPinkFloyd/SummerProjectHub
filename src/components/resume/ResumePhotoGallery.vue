<script setup lang="ts">
import { shallowRef } from 'vue'

import MediaLightbox, { type LightboxItem } from '@/components/resume/MediaLightbox.vue'

const photos: LightboxItem[] = [
  {
    src: 'assets/resume/lecture-type-errors.jpg',
    alt: '孙苏闽在前端技术分享会上讲解 JavaScript 类型错误',
    caption: 'Vue3 技术分享 · JavaScript 类型错误讲解',
  },
  {
    src: 'assets/resume/lecture-debugging.jpg',
    alt: '孙苏闽在前端技术分享会上进行现场代码演示',
    caption: 'Vue3 技术分享 · 现场代码演示',
  },
]

const activeIndex = shallowRef(0)
const isOpen = shallowRef(false)

function openPhoto(index: number) {
  activeIndex.value = index
  isOpen.value = true
}
</script>

<template>
  <section id="photos" class="photo-section" aria-labelledby="photo-section-title">
    <div class="photo-heading">
      <div>
        <span>LECTURE / 2024</span>
        <h4 id="photo-section-title">前端技术分享现场</h4>
      </div>
      <p>Vue3 技术分享讲师记录</p>
    </div>

    <div class="photo-grid">
      <button
        v-for="(photo, index) in photos"
        :key="photo.src"
        class="photo-button"
        type="button"
        :aria-label="`放大查看：${photo.caption}`"
        @click="openPhoto(index)"
      >
        <img :src="photo.src" :alt="photo.alt" width="1280" height="960" loading="lazy" />
        <span>{{ index === 0 ? '课程讲解' : '代码演示' }} <b aria-hidden="true">↗</b></span>
      </button>
    </div>
  </section>

  <MediaLightbox
    :open="isOpen"
    :items="photos"
    :active-index="activeIndex"
    @close="isOpen = false"
    @select="activeIndex = $event"
  />
</template>

<style scoped>
.photo-section {
  scroll-margin-top: 132px;
  margin-top: 22px;
  padding: 20px;
  border: 1px solid color-mix(in srgb, var(--accent), var(--line) 76%);
  border-radius: 12px;
  background: color-mix(in srgb, var(--accent), var(--surface) 97%);
}

.photo-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 16px;
}

.photo-heading span {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: 0.1em;
}

.photo-heading h4 {
  margin: 5px 0 0;
  font-size: 1rem;
}

.photo-heading p {
  margin: 0;
  color: var(--text-faint);
  font-size: 0.75rem;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.photo-button {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  border: 0;
  border-radius: 9px;
  background: var(--surface-muted);
  cursor: zoom-in;
}

.photo-button img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: filter 220ms ease, transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
}

.photo-button:hover img {
  filter: brightness(0.92);
  transform: scale(1.015);
}

.photo-button span {
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: inline-flex;
  gap: 8px;
  padding: 7px 9px;
  border-radius: 7px;
  background: rgba(17, 17, 17, 0.74);
  color: #fff;
  font-size: 0.6875rem;
  backdrop-filter: blur(8px);
}

.photo-button b {
  transition: transform 160ms ease;
}

.photo-button:hover b {
  transform: translate(2px, -2px);
}

@media (max-width: 620px) {
  .photo-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  .photo-grid {
    grid-template-columns: 1fr;
  }
}
</style>
