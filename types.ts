
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  isNew?: boolean;
  discount?: number;
  isUsed?: boolean;
  source: 'store' | 'user';
  sellerName?: string;
  sellerPhone?: string;
  studentDiscount?: number; // Optional percentage discount for students
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  name: string;
  count: number;
  icon: string;
}

export interface UserProfile {
  email: string;
  phone?: string;
  score: number;
  isLoggedIn: boolean;
  isStudent: boolean;
}
