export type Language = 'en' | 'am';

export interface CategoryItem {
  id: string;
  key: 'suits' | 'clothing' | 'shoes' | 'accessories' | 'wedding';
  image: string;
  featuredImages: string[];
  titleEn: string;
  titleAm: string;
  descriptionEn: string;
  descriptionAm: string;
  highlightsEn: string[];
  highlightsAm: string[];
}

export interface FeaturedLookItem {
  id: string;
  nameEn: string;
  nameAm: string;
  tagEn: string;
  tagAm: string;
  descriptionEn: string;
  descriptionAm: string;
  image: string;
  secondaryImage?: string;
  piecesEn: string[];
  piecesAm: string[];
  fitEn: string;
  fitAm: string;
  occasionEn: string;
  occasionAm: string;
}

export type LookbookCategory = 'all' | 'formal' | 'wedding' | 'business' | 'smart-casual' | 'evening';

export interface LookbookImage {
  id: string;
  titleEn: string;
  titleAm: string;
  category: LookbookCategory;
  categoryNameEn: string;
  categoryNameAm: string;
  imageUrl: string;
  aspectRatio: 'tall' | 'square' | 'wide';
  captionEn: string;
  captionAm: string;
}

export interface StoreHourDay {
  dayEn: string;
  dayAm: string;
  hoursEn: string;
  hoursAm: string;
  isOpenToday: boolean;
  isSunday: boolean;
}
