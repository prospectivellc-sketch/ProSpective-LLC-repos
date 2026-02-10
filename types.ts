
export interface ServiceAction {
  label: string;
  url: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'Technical' | 'Multimedia' | 'Financial' | 'E-Commerce' | 'Design';
  details: string[];
  icon: string;
  ctaLink?: string;
  links?: ServiceAction[];
  bgImage?: string;
}

export interface Product {
  id: number;
  url: string;
  image: string;
  label: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
}