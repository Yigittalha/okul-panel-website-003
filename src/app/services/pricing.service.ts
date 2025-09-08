import { Injectable, signal } from '@angular/core';

export interface PricingCalculation {
  studentCount: number;
  basePrice: number;
  perStudentPrice: number;
  totalPrice: number;
  finalTotal: number;
  isAnnual: boolean;
  schoolType: 'private' | 'public';
  discount: number;
  perStudentPerYear: number;
}

export interface PricingConstraints {
  min: number;
  max: number;
  step: number;
}

@Injectable({
  providedIn: 'root'
})
export class PricingService {
  // Pricing constants
  private readonly BASE_PRICE_ANNUAL = 7500; // Yıllık taban fiyat
  private readonly PRICE_PER_STUDENT_ANNUAL = 25; // Yıllık öğrenci başı
  private readonly ANNUAL_DISCOUNT = 0.15; // %15 yıllık indirim
  private readonly MIN_STUDENTS = 50;
  private readonly MAX_STUDENTS = 5000;
  private readonly STEP_STUDENTS = 50;

  // Reactive state
  private studentCountSubject = signal(100);
  private isAnnualSubject = signal(true);
  private schoolTypeSubject = signal<'private' | 'public'>('private');
  
  public studentCount$ = this.studentCountSubject;
  public isAnnual$ = this.isAnnualSubject;
  public schoolType$ = this.schoolTypeSubject;

  getConstraints(): PricingConstraints {
    return {
      min: this.MIN_STUDENTS,
      max: this.MAX_STUDENTS,
      step: this.STEP_STUDENTS
    };
  }

  getBasicCalculation(studentCount: number, isAnnual: boolean = true, schoolType: 'private' | 'public' = 'private'): PricingCalculation {
    // Devlet okulu için özel fiyatlandırma
    if (schoolType === 'public') {
      return {
        studentCount,
        basePrice: 0,
        perStudentPrice: 0,
        totalPrice: 0,
        finalTotal: 0,
        isAnnual: true,
        schoolType,
        discount: 0,
        perStudentPerYear: 0
      };
    }
    
    // Özel okul fiyatlandırması
    const basePriceAnnual = this.BASE_PRICE_ANNUAL;
    const perStudentAnnual = this.PRICE_PER_STUDENT_ANNUAL;
    
    let basePrice: number;
    let perStudentPrice: number;
    let discount = 0;
    
    if (isAnnual) {
      // Yıllık: %15 indirim uygula
      basePrice = basePriceAnnual * (1 - this.ANNUAL_DISCOUNT);
      perStudentPrice = perStudentAnnual * (1 - this.ANNUAL_DISCOUNT);
      discount = this.ANNUAL_DISCOUNT;
    } else {
      // Aylık: yıllık fiyatın 1/12'si
      basePrice = basePriceAnnual / 12;
      perStudentPrice = perStudentAnnual / 12;
    }
    
    const totalPrice = basePrice + (studentCount * perStudentPrice);
    const perStudentPerYear = isAnnual ? perStudentPrice : perStudentPrice * 12;
    
    return {
      studentCount,
      basePrice: Math.round(basePrice),
      perStudentPrice: Math.round(perStudentPrice),
      totalPrice: Math.round(totalPrice),
      finalTotal: Math.round(totalPrice),
      isAnnual,
      schoolType,
      discount,
      perStudentPerYear: Math.round(perStudentPerYear)
    };
  }

  updateStudentCount(count: number): void {
    if (count >= this.MIN_STUDENTS && count <= this.MAX_STUDENTS) {
      this.studentCountSubject.set(count);
    }
  }

  updateBillingPeriod(isAnnual: boolean): void {
    this.isAnnualSubject.set(isAnnual);
  }

  updateSchoolType(schoolType: 'private' | 'public'): void {
    this.schoolTypeSubject.set(schoolType);
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  }

  getDetailedDisclaimerText(): string {
    return 'Fiyatlar yaklaşık değerlerdir ve öğrenci sayınıza göre hesaplanır. 3 gün deneme süreci ile sistemi test edebilirsiniz. Kesin fiyat için lütfen iletişime geçin. Tüm fiyatlara KDV dahildir.';
  }
}
