<template>
  <section class="not-found">
    <span>404 / ROUTE NOT FOUND</span>
    <h1>这个页面不存在</h1>
    <p>项目入口可能已经调整，返回首页可以查看当前收录的项目。</p>
    <RouterLink to="/">返回项目首页</RouterLink>
  </section>
</template>

<style scoped>
.not-found {
  display: grid;
  min-height: 55vh;
  place-content: center;
  text-align: center;
}

.not-found span {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
}

.not-found h1 {
  margin: 14px 0 12px;
  font-size: clamp(2rem, 5vw, 4rem);
}

.not-found p {
  max-width: 480px;
  margin: 0 0 24px;
  color: var(--text-muted);
  line-height: 1.7;
}

.not-found a {
  color: var(--accent);
}
</style>
