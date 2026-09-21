<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import { useTheme } from '@/composables/useTheme'

useTheme()
</script>

<template>
  <div class="site-shell">
    <SiteHeader />
    <main class="site-main">
      <RouterView />
    </main>
    <footer class="site-footer">
      <span>© 2026 PinkPinkFloyd</span>
      <a href="https://github.com/PinkPinkFloyd" target="_blank" rel="noreferrer">GitHub</a>
    </footer>
  </div>
</template>

<style scoped>
.site-shell {
  min-height: 100vh;
}

.site-main {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  padding: 64px 0 96px;
}

.site-footer {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  padding: 24px 0 36px;
  border-top: 1px solid var(--line);
  color: var(--text-muted);
  font-size: 0.8125rem;
}

.site-footer a {
  color: inherit;
  text-decoration: none;
}

.site-footer a:hover {
  color: var(--text);
}

@media (max-width: 700px) {
  .site-main {
    width: min(100% - 28px, 1180px);
    padding: 40px 0 64px;
  }

  .site-footer {
    align-items: flex-start;
    flex-direction: column;
    width: min(100% - 28px, 1180px);
  }
}
</style>
