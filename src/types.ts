export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  season: string;
  description: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}