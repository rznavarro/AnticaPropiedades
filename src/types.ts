export interface Property {
  id: string;
  title: string;
  operation: 'Venta' | 'Arriendo';
  type: string;
  price: string;
  m2: number;
  bedrooms: number;
  bathrooms: number;
  imageUrl: string;
  location: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  avatarUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}
