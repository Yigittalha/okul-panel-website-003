export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color?: string;
  isAdvanced?: boolean;
  tags?: string[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
}

export interface Screenshot {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  institution: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}


export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  institution: string;
  message: string;
  kvkkConsent: boolean;
}

export interface TrustBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}
