"use client"

export function useSmoothScroll() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return { scrollToSection }
}
