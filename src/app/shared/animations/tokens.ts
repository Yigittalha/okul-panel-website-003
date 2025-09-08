/**
 * Animation Design Tokens
 * Consistent timing and easing values for all animations
 */

export const ANIMATION_DURATION = {
  xs: 160,
  s: 240,
  m: 360,
  l: 480,
} as const;

export const ANIMATION_EASING = {
  // Standard easing for enter animations
  standard: 'cubic-bezier(0.2, 0.0, 0.0, 1)',
  // Exit easing for leave animations  
  exit: 'cubic-bezier(0.4, 0.0, 1, 1)',
  // Gentle bounce for micro-interactions
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const;

export const ANIMATION_DISTANCE = {
  // Transform distances in pixels
  slideDistance: 24,
  slideDistanceLarge: 48,
  // Scale values
  scaleHover: 1.02,
  scaleActive: 0.98,
  scaleFocus: 1.05,
} as const;

export const STAGGER_DELAY = {
  // Stagger delays in milliseconds
  items: 80,
  cards: 120,
  sections: 200,
} as const;

/**
 * Helper function to check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get animation duration with reduced motion fallback
 */
export function getAnimationDuration(duration: keyof typeof ANIMATION_DURATION): number {
  return prefersReducedMotion() ? 0 : ANIMATION_DURATION[duration];
}

/**
 * Get animation easing with reduced motion fallback
 */
export function getAnimationEasing(easing: keyof typeof ANIMATION_EASING): string {
  return prefersReducedMotion() ? 'linear' : ANIMATION_EASING[easing];
}
