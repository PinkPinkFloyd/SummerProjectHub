<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, shallowRef } from 'vue'
import { useRoute } from 'vue-router'

import { useTheme } from '@/composables/useTheme'

const githubUrl = 'https://github.com/PinkPinkFloyd'
const { theme, toggleTheme } = useTheme()
const route = useRoute()
const showResumeHint = shallowRef(false)
let showTimer: ReturnType<typeof setTimeout> | undefined
let hideTimer: ReturnType<typeof setTimeout> | undefined

const themeButtonLabel = computed(() => (theme.value === 'light' ? '切换到深色主题' : '切换到浅色主题'))

function dismissResumeHint() {
  showResumeHint.value = false
  window.sessionStorage.setItem('project-hub-resume-hint-seen', 'true')
}

onMounted(() => {
  if (window.location.hash.startsWith('#/resume')) return
  if (route.name === 'resume') return
  if (window.sessionStorage.getItem('project-hub-resume-hint-seen')) return

  showTimer = window.setTimeout(() => {
    showResumeHint.value = true
    hideTimer = window.setTimeout(dismissResumeHint, 7000)
  }, 650)
})

onBeforeUnmount(() => {
  if (showTimer) window.clearTimeout(showTimer)
  if (hideTimer) window.clearTimeout(hideTimer)
})
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <RouterLink class="brand" to="/" aria-label="返回项目首页">
        <span class="brand-mark">P</span>
        <strong>Project Hub</strong>
      </RouterLink>

      <nav class="header-nav" aria-label="主要导航">
        <RouterLink to="/" exact-active-class="active">项目档案</RouterLink>
        <RouterLink to="/skills" active-class="active">技能 Skills</RouterLink>
        <span class="resume-link-wrap">
          <RouterLink to="/resume" active-class="active" @click="dismissResumeHint">个人简历</RouterLink>
          <span v-if="showResumeHint" class="resume-hint" role="status">
            <i aria-hidden="true"></i>
            点击查看个人简历
          </span>
        </span>
        <a :href="githubUrl" target="_blank" rel="noreferrer">GitHub</a>
        <button class="theme-button" type="button" :aria-label="themeButtonLabel" @click="toggleTheme">
          <svg v-if="theme === 'light'" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.4 15.2A8.5 8.5 0 0 1 8.8 3.6 8.5 8.5 0 1 0 20.4 15.2Z" />
          </svg>
          <svg v-else viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
          </svg>
          <span>{{ theme === 'light' ? '深色' : '浅色' }}</span>
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  z-index: 20;
  top: 0;
  border-bottom: 1px solid var(--line);
  background: color-mix(in srgb, var(--bg) 92%, transparent);
  backdrop-filter: blur(14px);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1180px, calc(100% - 40px));
  min-height: 64px;
  margin: 0 auto;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--text);
  text-decoration: none;
}

.brand-mark {
  display: grid;
  width: 30px;
  height: 30px;
  place-items: center;
  border: 1px solid var(--text);
  border-radius: 7px;
  color: var(--text);
  font-weight: 700;
}

.brand strong {
  font-size: 0.9375rem;
  letter-spacing: -0.01em;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-nav a {
  padding: 8px 10px;
  border-radius: 7px;
  color: var(--text-subtle);
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 160ms ease, background 160ms ease;
}

.header-nav a:hover {
  color: var(--text);
}

.header-nav a.active {
  background: var(--surface-muted);
  color: var(--text);
}

.resume-link-wrap {
  position: relative;
  display: inline-flex;
}

.resume-hint {
  position: absolute;
  right: -8px;
  bottom: -49px;
  display: inline-flex;
  align-items: center;
  width: max-content;
  gap: 8px;
  padding: 9px 12px;
  border: 1px solid color-mix(in srgb, var(--accent), var(--line) 72%);
  border-radius: 9px;
  background: var(--surface);
  box-shadow: var(--shadow-card);
  color: var(--text-subtle);
  font-size: 0.75rem;
  animation: hint-arrive 420ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.resume-hint::before {
  position: absolute;
  top: -5px;
  right: 22px;
  width: 8px;
  height: 8px;
  border-top: 1px solid color-mix(in srgb, var(--accent), var(--line) 72%);
  border-left: 1px solid color-mix(in srgb, var(--accent), var(--line) 72%);
  background: var(--surface);
  content: '';
  transform: rotate(45deg);
}

.resume-hint i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent), transparent 45%);
  animation: hint-pulse 1.8s ease-out infinite;
}

@keyframes hint-arrive {
  from {
    opacity: 0;
    transform: translateY(-5px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes hint-pulse {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent), transparent 40%);
  }

  70%,
  100% {
    box-shadow: 0 0 0 7px color-mix(in srgb, var(--accent), transparent 100%);
  }
}

.theme-button {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  min-height: 36px;
  padding: 0 11px;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  background: var(--surface);
  color: var(--text-subtle);
  cursor: pointer;
  font: inherit;
  font-size: 0.8125rem;
}

.theme-button:hover {
  border-color: var(--text-muted);
  color: var(--text);
}

.theme-button svg {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
}

@media (max-width: 600px) {
  .header-inner {
    width: min(100% - 28px, 1180px);
  }

  .theme-button span {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }

  .header-nav {
    gap: 2px;
  }

  .header-nav a {
    padding-inline: 7px;
    font-size: 0.75rem;
  }

  .resume-hint {
    right: -4px;
    max-width: calc(100vw - 28px);
  }

  .header-nav a[href^='https'] {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .resume-hint,
  .resume-hint i {
    animation: none;
  }
}
</style>
