import { onBeforeUnmount, onMounted, readonly, shallowRef } from 'vue'

export function useResumeAnchors(sectionIds: string[]) {
  const activeSection = shallowRef(sectionIds[0] ?? '')
  let observer: IntersectionObserver | undefined

  function navigateToSection(sectionId: string) {
    const section = document.getElementById(sectionId)
    if (!section) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    section.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
    activeSection.value = sectionId
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleEntry?.target.id) activeSection.value = visibleEntry.target.id
      },
      {
        rootMargin: '-132px 0px -45% 0px',
        threshold: [0, 0.15, 0.45],
      },
    )

    sectionIds.forEach((sectionId) => {
      const section = document.getElementById(sectionId)
      if (section) observer?.observe(section)
    })
  })

  onBeforeUnmount(() => observer?.disconnect())

  return {
    activeSection: readonly(activeSection),
    navigateToSection,
  }
}
