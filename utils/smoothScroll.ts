/**
 * Smooth scrolling utility with header offset calculation and reduced-motion detection.
 * Preserves native browser navigation, keyboard scrolling, and touch scrolling.
 */

export function isReducedMotionPreferred(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function scrollToSection(sectionId: string, headerOffset = 84): void {
  if (typeof window === 'undefined') return;

  const target = document.getElementById(sectionId);
  if (!target) return;

  const reducedMotion = isReducedMotionPreferred();
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: Math.max(0, offsetPosition),
    behavior: reducedMotion ? 'auto' : 'smooth',
  });

  // Update URL hash without jumping
  if (window.history.pushState) {
    window.history.pushState(null, '', `#${sectionId}`);
  } else {
    window.location.hash = `#${sectionId}`;
  }
}

