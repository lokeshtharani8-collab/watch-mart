export type WatchCategory = 
  | 'Analog' 
  | 'Digital' 
  | 'Analog-Digital' 
  | 'Chronograph' 
  | 'Smart Watch';

export type BrandName = 
  | 'Casio' 
  | 'Titan' 
  | 'Sonata' 
  | 'Fastrack' 
  | 'Allen Solly' 
  | 'Timex' 
  | 'Fossil' 
  | 'Tommy Hilfiger';

export interface WatchSpecifications {
  dialColor: string;
  strapMaterial: string;
  caseDiameter: string;
  waterResistance: string;
  movement: string;
  warranty: string;
}

export interface WatchProduct {
  id: string;
  brand: BrandName;
  model: string;
  name: string;
  category: WatchCategory;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  additionalImages?: string[];
  description: string;
  features: string[];
  specifications: WatchSpecifications;
  availability: 'In Stock' | 'Low Stock (Only 2 Left)' | 'Selling Fast';
  gender: 'Men' | 'Women' | 'Unisex';
  featured?: boolean;
  isNewArrival?: boolean;
}

export interface CartItem {
  product: WatchProduct;
  quantity: number;
}

export interface CustomerInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: 'cod' | 'upi' | 'card';
}

export interface PlacedOrder {
  orderId: string;
  date: string;
  customer: CustomerInfo;
  items: CartItem[];
  subtotal: number;
  delivery: number;
  tax: number;
  total: number;
  estimatedDelivery: string;
}

export type PageRoute = 
  | 'home' 
  | 'shop' 
  | 'brands' 
  | 'about' 
  | 'contact' 
  | 'cart' 
  | 'checkout' 
  | 'product-details';
