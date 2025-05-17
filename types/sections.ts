// types/sections.ts

export type HeroSection = {
  acf_fc_layout: "header";
  header_pill: string;
  header_title: string;
  header_subtitle: string;
  request_button: string;
  call_now: string;
  header_image: boolean | string;
};

export type AboutSection = {
  acf_fc_layout: "about";
  about_image: boolean | string;
  about_pill: string;
  about_title: string;
  about_paragraph: string;
  learn_more: string;
  contact_us: string;
};

export type ServicesSection = {
  acf_fc_layout: "services";
  services_pill: string;
  services_title: string;
  services_subtitle: string;
  services_types: any; // Can update to array/object type if known
  services_more: string;
};

export type TestimonialsSection = {
  acf_fc_layout: "testimonials";
  testimonials_pills: string;
  testimonials_title: string;
  testimonials_subtitle: string;
  testimonial_info: any; // Can update to array/object type if known
};

export type SectionType =
  | HeroSection
  | AboutSection
  | ServicesSection
  | TestimonialsSection;
