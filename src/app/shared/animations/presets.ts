/**
 * Reusable Animation Presets
 * Angular animation triggers for consistent motion design
 */

import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
  group,
  animateChild,
} from '@angular/animations';
import { ANIMATION_DURATION, ANIMATION_EASING, ANIMATION_DISTANCE } from './tokens';

// Fade In Animation
export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(`${ANIMATION_DURATION.m}ms ${ANIMATION_EASING.standard}`, 
      style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate(`${ANIMATION_DURATION.s}ms ${ANIMATION_EASING.exit}`, 
      style({ opacity: 0 }))
  ])
]);

// Fade In Up Animation
export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ 
      opacity: 0, 
      transform: `translateY(${ANIMATION_DISTANCE.slideDistance}px)` 
    }),
    animate(`${ANIMATION_DURATION.m}ms ${ANIMATION_EASING.standard}`, 
      style({ 
        opacity: 1, 
        transform: 'translateY(0)' 
      }))
  ]),
  transition(':leave', [
    animate(`${ANIMATION_DURATION.s}ms ${ANIMATION_EASING.exit}`, 
      style({ 
        opacity: 0, 
        transform: `translateY(-${ANIMATION_DISTANCE.slideDistance}px)` 
      }))
  ])
]);

// Slide In Left Animation
export const slideInLeft = trigger('slideInLeft', [
  transition(':enter', [
    style({ 
      opacity: 0, 
      transform: `translateX(-${ANIMATION_DISTANCE.slideDistanceLarge}px)` 
    }),
    animate(`${ANIMATION_DURATION.m}ms ${ANIMATION_EASING.standard}`, 
      style({ 
        opacity: 1, 
        transform: 'translateX(0)' 
      }))
  ])
]);

// Slide In Right Animation
export const slideInRight = trigger('slideInRight', [
  transition(':enter', [
    style({ 
      opacity: 0, 
      transform: `translateX(${ANIMATION_DISTANCE.slideDistanceLarge}px)` 
    }),
    animate(`${ANIMATION_DURATION.m}ms ${ANIMATION_EASING.standard}`, 
      style({ 
        opacity: 1, 
        transform: 'translateX(0)' 
      }))
  ])
]);

// Scale In Animation
export const scaleIn = trigger('scaleIn', [
  transition(':enter', [
    style({ 
      opacity: 0, 
      transform: 'scale(0.8)' 
    }),
    animate(`${ANIMATION_DURATION.m}ms ${ANIMATION_EASING.bounce}`, 
      style({ 
        opacity: 1, 
        transform: 'scale(1)' 
      }))
  ])
]);

// List Stagger Animation
export const listStagger = trigger('listStagger', [
  transition('* => *', [
    query(':enter', [
      style({ 
        opacity: 0, 
        transform: `translateY(${ANIMATION_DISTANCE.slideDistance}px)` 
      }),
      stagger(80, [
        animate(`${ANIMATION_DURATION.m}ms ${ANIMATION_EASING.standard}`, 
          style({ 
            opacity: 1, 
            transform: 'translateY(0)' 
          }))
      ])
    ], { optional: true })
  ])
]);

// Route Transition Animation
export const routeTransition = trigger('routeTransition', [
  transition('* => *', [
    group([
      query(':enter', [
        style({ 
          opacity: 0, 
          transform: `translateY(${ANIMATION_DISTANCE.slideDistance}px)` 
        }),
        animate(`${ANIMATION_DURATION.l}ms ${ANIMATION_EASING.standard}`, 
          style({ 
            opacity: 1, 
            transform: 'translateY(0)' 
          }))
      ], { optional: true }),
      query(':leave', [
        animate(`${ANIMATION_DURATION.s}ms ${ANIMATION_EASING.exit}`, 
          style({ 
            opacity: 0, 
            transform: `translateY(-${ANIMATION_DISTANCE.slideDistance}px)` 
          }))
      ], { optional: true })
    ])
  ])
]);

// Card Hover Animation (for CSS classes)
export const cardHover = trigger('cardHover', [
  state('default', style({ transform: 'scale(1)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' })),
  state('hovered', style({ 
    transform: `scale(${ANIMATION_DISTANCE.scaleHover})`, 
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
  })),
  transition('default <=> hovered', [
    animate(`${ANIMATION_DURATION.s}ms ${ANIMATION_EASING.standard}`)
  ])
]);

// Navbar Sticky Animation
export const navbarSticky = trigger('navbarSticky', [
  state('default', style({ 
    boxShadow: 'none', 
    backdropFilter: 'none',
    backgroundColor: 'transparent'
  })),
  state('sticky', style({ 
    boxShadow: '0 4px 20px rgba(13, 27, 42, 0.08)', 
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(13, 27, 42, 0.95)'
  })),
  transition('default <=> sticky', [
    animate(`${ANIMATION_DURATION.m}ms ${ANIMATION_EASING.standard}`)
  ])
]);

// Mobile Menu Toggle Animation (Simple Side Slide)
export const mobileMenuToggle = trigger('mobileMenuToggle', [
  state('open', style({ 
    transform: 'translateX(0)',
    opacity: 1
  })),
  transition(':enter', [
    style({ 
      transform: 'translateX(100%)',
      opacity: 0
    }),
    animate(`${ANIMATION_DURATION.m}ms ${ANIMATION_EASING.standard}`, 
      style({ 
        transform: 'translateX(0)',
        opacity: 1
      }))
  ]),
  transition(':leave', [
    animate(`${ANIMATION_DURATION.s}ms ${ANIMATION_EASING.exit}`, 
      style({ 
        transform: 'translateX(100%)',
        opacity: 0
      }))
  ])
]);

// Number Counter Animation (for stats)
export const numberCounter = trigger('numberCounter', [
  transition('* => *', [
    animate(`${ANIMATION_DURATION.l}ms ${ANIMATION_EASING.standard}`)
  ])
]);
