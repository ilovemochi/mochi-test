import { Theme } from '@design-system';
import { IProductImage } from '@ilovemochi/types';

export type CardVariant = 'essential' | 'restaurant' | 'miniRestaurant' | 'product' | 'miniProduct';

export interface CardWrapperProps {
  variant: CardVariant;
  bg: keyof Theme['colors'];
}

export interface EssentialsProps {
  storeName: string;
  productName: string;
  onClick: () => void;
  image: IProductImage;
  variant: 'essential';
}

export interface ProductProps {
  price: number;
  btnText: string;
  prepareTime: string;
  productName: string;
  description: string;
  image: IProductImage;
  compressed?: boolean;
  onClick: (x: number) => void;
  variant: 'product' | 'miniProduct';
}

export interface RestaurantProps {
  logo: string;
  likes: number;
  isOpen?: boolean;
  limitHour: number;
  storeName: string;
  distanceMin: number;
  onClick: () => void;
  compressed?: boolean;
  image: IProductImage;
  variant: 'restaurant' | 'miniRestaurant';
}
