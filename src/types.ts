export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface WhyChooseUsItem {
  id: number;
  title: string;
  description: string;
}

export interface ProcessStepItem {
  id: string;
  title: string;
  description: string;
  phase: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  businessType: string;
  rating: number;
}
