import { readonly, shallowRef } from 'vue'

export type Theme = 'light' | 'dark'

const currentTheme = shallowRef<Theme>('light')
let isInitialized = false

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'

  try {
    const savedTheme = window.localStorage.getItem('project-hub-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  } catch {
    // Storage can be unavailable in privacy-focused browser modes.
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme, persist = true) {
  currentTheme.value = theme

  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
  }

  if (persist && typeof window !== 'undefined') {
    try {
      window.localStorage.setItem('project-hub-theme', theme)
    } catch {
      // The visual theme still works when persistence is unavailable.
    }
  }
}

export function useTheme() {
  if (!isInitialized) {
    applyTheme(getInitialTheme(), false)
    isInitialized = true
  }

  function toggleTheme() {
    applyTheme(currentTheme.value === 'light' ? 'dark' : 'light')
  }

  return {
    theme: readonly(currentTheme),
    toggleTheme,
  }
}
