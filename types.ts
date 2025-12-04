import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  includes: string[];
  image: string;
  popular?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface PortfolioItem {
  id: number;
  category: 'novias' | 'social' | 'editorial' | 'quinceañeras';
  image: string;
  title: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BenefitItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}