<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, watch } from 'vue'

export interface LightboxItem {
  src: string
  alt: string
  caption: string
}

const props = defineProps<{
  open: boolean
  items: LightboxItem[]
  activeIndex: number
}>()

const emit = defineEmits<{
  close: []
  select: [index: number]
}>()

const activeItem = computed(() => props.items[props.activeIndex])
const hasMultipleItems = computed(() => props.items.length > 1)
let previousOverflow = ''

function selectOffset(offset: number) {
  if (!props.items.length) return
  emit('select', (props.activeIndex + offset + props.items.length) % props.items.length)
}

function handleKeydown(event: KeyboardEvent) {
  if (!props.open) return

  if (event.key === 'Escape') emit('close')
  if (event.key === 'ArrowLeft') selectOffset(-1)
  if (event.key === 'ArrowRight') selectOffset(1)
}

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return
    }

    document.body.style.overflow = previousOverflow
  },
)

onMounted(() => window.addEventListener('keydown', handleKeydown))

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = previousOverflow
})
</script>

<template>
  <Teleport to="body">
    <div v-if="open && activeItem" class="lightbox" role="dialog" aria-modal="true" :aria-label="activeItem.caption" @click.self="emit('close')">
      <button class="close-button" type="button" aria-label="关闭大图" @click="emit('close')">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      </button>

      <button v-if="hasMultipleItems" class="nav-button previous" type="button" aria-label="上一张" @click="selectOffset(-1)">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>
      </button>

      <figure class="lightbox-figure">
        <img :src="activeItem.src" :alt="activeItem.alt" />
        <figcaption>
          <span>{{ activeItem.caption }}</span>
          <span v-if="hasMultipleItems">{{ activeIndex + 1 }} / {{ items.length }}</span>
        </figcaption>
      </figure>

      <button v-if="hasMultipleItems" class="nav-button next" type="button" aria-label="下一张" @click="selectOffset(1)">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
      </button>
    </div>
  </Teleport>
</template>

<style scoped>
.lightbox {
  position: fixed;
  z-index: 100;
  inset: 0;
  display: grid;
  grid-template-columns: 68px minmax(0, 1fr) 68px;
  align-items: center;
  padding: 26px;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(12px);
}

.lightbox-figure {
  display: grid;
  min-width: 0;
  max-height: calc(100vh - 52px);
  gap: 14px;
  justify-items: center;
  margin: 0;
}

.lightbox-figure img {
  display: block;
  max-width: 100%;
  max-height: calc(100vh - 108px);
  border-radius: 8px;
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.34);
  object-fit: contain;
}

.lightbox-figure figcaption {
  display: flex;
  justify-content: space-between;
  width: min(760px, 100%);
  gap: 20px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.8125rem;
}

.close-button,
.nav-button {
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  cursor: pointer;
  transition: background 160ms ease, transform 160ms ease;
}

.close-button:hover,
.nav-button:hover {
  background: rgba(255, 255, 255, 0.16);
}

.close-button svg,
.nav-button svg {
  width: 21px;
  height: 21px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
}

.close-button {
  position: fixed;
  top: 22px;
  right: 22px;
  z-index: 1;
  width: 42px;
  height: 42px;
}

.nav-button {
  width: 46px;
  height: 46px;
  justify-self: center;
}

.previous:hover {
  transform: translateX(-2px);
}

.next:hover {
  transform: translateX(2px);
}

@media (max-width: 700px) {
  .lightbox {
    grid-template-columns: 1fr;
    padding: 64px 14px 72px;
  }

  .lightbox-figure {
    max-height: calc(100vh - 136px);
  }

  .lightbox-figure img {
    max-height: calc(100vh - 186px);
  }

  .nav-button {
    position: fixed;
    bottom: 18px;
  }

  .previous {
    left: calc(50% - 58px);
  }

  .next {
    right: calc(50% - 58px);
  }

  .lightbox-figure figcaption {
    font-size: 0.75rem;
  }
}
</style>
