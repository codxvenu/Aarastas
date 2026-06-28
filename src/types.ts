export interface ProductDetail {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  price: string;
  image: string;
  secondaryImages: string[];
  videoUrl?: string;
  story: string;
  material: string;
  dimensions: string;
  craftsmanship: string;
  styling: string;
  care: string;
  complementaryIds: string[];
}

export type MasonryTile =
  | {
      type: "image";
      id: string;
      image: string;
      title: string;
      category: string;
      colSpan: string; // e.g. 'col-span-12 md:col-span-4'
      heightClass: string; // e.g. 'h-[400px]'
      productDetail: ProductDetail;
    }
  | {
      type: "video";
      id: string;
      videoUrl: string; // Using subtle looping atmospheric video / gorgeous stock video
      poster: string;
      title: string;
      category: string;
      colSpan: string;
      heightClass: string;
      productDetail: ProductDetail;
    }
  | {
      type: "quote";
      id: string;
      quote: string;
      author: string;
      colSpan: string;
      heightClass: string;
    }
  | {
      type: "collection";
      id: string;
      title: string;
      subtitle: string;
      image: string;
      colSpan: string;
      heightClass: string;
    };

export interface Hotspot {
  id: string;
  x: number; // percentage from left (0 to 100)
  y: number; // percentage from top (0 to 100)
  productDetail: ProductDetail;
}

export interface JournalPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  image: string;
}
