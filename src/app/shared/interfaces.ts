export interface CarouselElement {
  title: string;
  description: string;
  image?: string;
}

export interface SeoMetaData {
  title: string;
  description?: string;
  image?: string;
  robots?: string;
  canonicalLink?: string;
}