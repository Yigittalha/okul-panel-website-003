/**
 * In Viewport Directive
 * Adds 'in-view' class when element enters viewport
 * Respects prefers-reduced-motion setting
 */

import { 
  Directive, 
  ElementRef, 
  OnInit, 
  OnDestroy, 
  Input,
  Renderer2,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { prefersReducedMotion } from '../animations/tokens';

@Directive({
  selector: '[appInViewport]',
  standalone: true
})
export class InViewportDirective implements OnInit, OnDestroy {
  @Input() appInViewport = 'in-view';
  @Input() threshold = 0.1;
  @Input() rootMargin = '0px';
  @Input() triggerOnce = true;

  private observer?: IntersectionObserver;
  private hasTriggered = false;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // If user prefers reduced motion, immediately add class
    if (prefersReducedMotion()) {
      this.addClass();
      return;
    }

    this.setupObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupObserver() {
    if (!('IntersectionObserver' in window)) {
      // Fallback for older browsers
      this.addClass();
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.addClass();
            
            if (this.triggerOnce && !this.hasTriggered) {
              this.hasTriggered = true;
              this.observer?.unobserve(this.el.nativeElement);
            }
          } else if (!this.triggerOnce) {
            this.removeClass();
          }
        });
      },
      {
        threshold: this.threshold,
        rootMargin: this.rootMargin
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private addClass() {
    this.renderer.addClass(this.el.nativeElement, this.appInViewport);
  }

  private removeClass() {
    this.renderer.removeClass(this.el.nativeElement, this.appInViewport);
  }
}
