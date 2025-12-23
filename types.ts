
export interface Photo {
  id: string;
  url: string;
  category: 'Weddings' | 'Portraits' | 'Fashion' | 'Events' | 'Products';
  title: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
}
