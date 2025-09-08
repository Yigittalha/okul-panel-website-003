import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';

export interface CounterOptions {
  from: number;
  to: number;
  duration: number;
  easing?: (t: number) => number;
  onUpdate: (value: number) => void;
  onComplete?: () => void;
  shouldReduceMotion?: boolean;
}

export class Counter {

  static easing = {
    // Ease out cubic
    easeOutCubic: (t: number): number => 1 - Math.pow(1 - t, 3),
    
    // Ease out quart
    easeOutQuart: (t: number): number => 1 - Math.pow(1 - t, 4),
    
    // Ease out expo
    easeOutExpo: (t: number): number => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
    
    // Linear
    linear: (t: number): number => t,
  };

  static animate(options: CounterOptions, platformId?: Object): () => void {
    const {
      from,
      to,
      duration,
      easing = Counter.easing.easeOutCubic,
      onUpdate,
      onComplete,
      shouldReduceMotion = false
    } = options;

    // SSR guard - require platformId to be passed
    if (platformId && !isPlatformBrowser(platformId)) {
      onUpdate(to);
      onComplete?.();
      return () => {};
    }

    // Reduced motion: skip animation
    if (shouldReduceMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onUpdate(to);
      onComplete?.();
      return () => {};
    }

    let startTime: number | null = null;
    let animationId: number;
    let cancelled = false;

    const step = (currentTime: number) => {
      if (cancelled) return;

      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Apply easing function
      const easedProgress = easing(progress);
      
      // Calculate current value
      const currentValue = from + (to - from) * easedProgress;
      
      // Update callback
      onUpdate(Math.round(currentValue));
      
      if (progress < 1) {
        animationId = requestAnimationFrame(step);
      } else {
        onComplete?.();
      }
    };

    animationId = requestAnimationFrame(step);

    // Return cancel function
    return () => {
      cancelled = true;
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }

  /**
   * Animate a number with default settings optimized for counters
   */
  static count(
    from: number,
    to: number,
    onUpdate: (value: number) => void,
    duration: number = 1000,
    platformId?: Object
  ): () => void {
    return Counter.animate({
      from,
      to,
      duration,
      easing: Counter.easing.easeOutCubic,
      onUpdate,
    }, platformId);
  }

  /**
   * Animate currency values with appropriate formatting
   */
  static countCurrency(
    from: number,
    to: number,
    onUpdate: (formattedValue: string) => void,
    duration: number = 800,
    locale: string = 'tr-TR',
    currency: string = 'TRY'
  ): () => void {
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    return Counter.animate({
      from,
      to,
      duration,
      easing: Counter.easing.easeOutCubic,
      onUpdate: (value) => {
        onUpdate(formatter.format(Math.round(value)));
      },
    });
  }

  /**
   * Animate percentage values
   */
  static countPercentage(
    from: number,
    to: number,
    onUpdate: (formattedValue: string) => void,
    duration: number = 1000
  ): () => void {
    return Counter.animate({
      from,
      to,
      duration,
      easing: Counter.easing.easeOutCubic,
      onUpdate: (value) => {
        onUpdate(`${Math.round(value)}%`);
      },
    });
  }
}