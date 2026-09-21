<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
</script>

<template>
  <div class="site-shell">
    <SiteHeader />
    <main class="site-main">
      <RouterView />
    </main>
    <footer class="site-footer">
      <span>PinkPinkFloyd · Project Hub</span>
      <span>持续整理真实项目、组件实验与工程实践</span>
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
  padding: 52px 0 88px;
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

@media (max-width: 700px) {
  .site-main {
    width: min(100% - 28px, 1180px);
    padding: 32px 0 64px;
  }

  .site-footer {
    align-items: flex-start;
    flex-direction: column;
    width: min(100% - 28px, 1180px);
  }
}
</style>
