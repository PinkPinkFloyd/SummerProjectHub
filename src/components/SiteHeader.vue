<script setup lang="ts">
const githubUrl = 'https://github.com/PinkPinkFloyd'
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <RouterLink class="brand" to="/" aria-label="返回项目首页">
        <span class="brand-mark">P</span>
        <span class="brand-copy">
          <strong>Project Hub</strong>
          <small>PinkPinkFloyd / Engineering Archive</small>
        </span>
      </RouterLink>

      <nav class="header-nav" aria-label="主要导航">
        <RouterLink to="/">项目</RouterLink>
        <a :href="githubUrl" target="_blank" rel="noreferrer">GitHub ↗</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  z-index: 20;
  top: 0;
  border-bottom: 1px solid color-mix(in srgb, var(--line), transparent 20%);
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(18px);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1180px, calc(100% - 40px));
  min-height: 72px;
  margin: 0 auto;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--text);
  text-decoration: none;
}

.brand-mark {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border: 1px solid var(--accent);
  border-radius: 10px;
  background: linear-gradient(145deg, rgba(88, 246, 199, 0.16), rgba(85, 184, 255, 0.05));
  color: var(--accent);
  font-family: var(--font-mono);
  font-weight: 800;
}

.brand-copy {
  display: grid;
  gap: 2px;
}

.brand-copy strong {
  font-size: 0.9375rem;
  letter-spacing: 0.02em;
}

.brand-copy small {
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-nav a {
  padding: 9px 12px;
  border-radius: 8px;
  color: var(--text-subtle);
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 160ms ease, background 160ms ease;
}

.header-nav a:hover,
.header-nav a.router-link-active {
  background: var(--surface);
  color: var(--text);
}

@media (max-width: 600px) {
  .header-inner {
    width: min(100% - 28px, 1180px);
  }

  .brand-copy small {
    display: none;
  }

  .header-nav a:first-child {
    display: none;
  }
}
</style>
