<script setup lang="ts">
import ResumeAdditional from '@/components/resume/ResumeAdditional.vue'
import ResumeExperience from '@/components/resume/ResumeExperience.vue'
import ResumeOverview from '@/components/resume/ResumeOverview.vue'
import ResumeQuickNav, { type ResumeAnchor } from '@/components/resume/ResumeQuickNav.vue'
import ResumeSkills from '@/components/resume/ResumeSkills.vue'
import { useResumeAnchors } from '@/composables/useResumeAnchors'

const anchors: ResumeAnchor[] = [
  { id: 'profile', label: '个人简介' },
  { id: 'skills', label: '专业技能' },
  { id: 'ai-engineering', label: 'AI 工程化 & 智能编码能力' },
  { id: 'experience', label: '工作经历' },
  { id: 'photos', label: '图片' },
  { id: 'other-skills', label: '其他技术能力' },
  { id: 'education', label: '教育背景' },
]

const { activeSection, navigateToSection } = useResumeAnchors(anchors.map((anchor) => anchor.id))
</script>

<template>
  <div class="resume-view">
    <header class="resume-hero">
      <div class="hero-copy">
        <p>FRONTEND ENGINEER / RESUME</p>
        <h1>孙苏闽</h1>
        <strong>前端开发工程师</strong>
      </div>

      <div class="hero-meta">
        <div class="contact-list" aria-label="个人信息">
          <span>男 · 1998.03</span>
          <span>江苏苏州</span>
          <a href="tel:18862579930">188-6257-9930</a>
          <a href="mailto:836568391@qq.com">836568391@qq.com</a>
        </div>
        <a class="download-button" href="assets/resume/sun-sumin-resume.docx" download>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14" />
          </svg>
          下载 DOCX
        </a>
      </div>
    </header>

    <ResumeQuickNav :items="anchors" :active-id="activeSection" @navigate="navigateToSection" />

    <article class="resume-document">
      <ResumeOverview />
      <ResumeSkills />
      <ResumeExperience />
      <ResumeAdditional />
    </article>
  </div>
</template>

<style scoped>
.resume-view {
  display: grid;
  gap: 22px;
}

.resume-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  gap: 40px;
  padding: 14px 0 30px;
}

.hero-copy > p {
  margin: 0 0 14px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.14em;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(3.2rem, 7vw, 6.4rem);
  line-height: 0.95;
  letter-spacing: -0.07em;
}

.hero-copy > strong {
  display: block;
  margin-top: 16px;
  color: var(--text-muted);
  font-size: clamp(1rem, 2vw, 1.35rem);
  font-weight: 500;
  letter-spacing: 0.08em;
}

.hero-meta {
  display: grid;
  gap: 20px;
  justify-items: end;
}

.contact-list {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 8px 22px;
  color: var(--text-muted);
  font-size: 0.8125rem;
  text-align: right;
}

.contact-list a {
  color: inherit;
  text-decoration: none;
}

.contact-list a:hover {
  color: var(--text);
}

.download-button {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  min-height: 42px;
  padding: 0 15px;
  border-radius: 9px;
  background: var(--text);
  color: var(--bg);
  font-size: 0.8125rem;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 160ms ease, transform 160ms ease;
}

.download-button:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}

.download-button svg {
  width: 17px;
  height: 17px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
}

.resume-document {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--surface);
  box-shadow: var(--shadow-card);
}

@media (max-width: 760px) {
  .resume-hero {
    grid-template-columns: 1fr;
    align-items: start;
    gap: 26px;
  }

  .hero-meta {
    justify-items: start;
  }

  .contact-list {
    text-align: left;
  }
}

@media (max-width: 520px) {
  .contact-list {
    grid-template-columns: 1fr;
  }

  .resume-document {
    margin-inline: -14px;
    border-right: 0;
    border-left: 0;
    border-radius: 0;
  }
}
</style>
