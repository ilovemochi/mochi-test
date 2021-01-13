// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from '@storybook/react/types-6-0';

import Card from './index';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: Story<any> = args => <Card {...args} />;

export const Essential = Template.bind({});
Essential.args = {
  image: {
    small: 'absolut-300w.png',
    medium: 'absolut-600w.png',
  },
  storeName: 'Mochi Store',
  productName: 'Amicone',
  onClick: () => {},
  variant: 'essential',
};

export const Product = Template.bind({});
Product.args = {
  image: {
    small: 'absolut-300w.png',
    medium: 'absolut-600w.png',
  },
  productName: 'Amicone',
  description: 'tomates 20g, cebola 15g, alface 5g, 1 fatia de pão e molho janonês',
  price: 10000,
  onClick: () => {},
  prepareTime: '20min',
  btnText: 'Adicionar ao carrinho',
  variant: 'product',
};

export const MiniProduct = Template.bind({});
MiniProduct.args = {
  image: {
    small: 'absolut-300w.png',
    medium: 'absolut-600w.png',
  },
  productName: 'Amicone',
  description: 'tomates 20g, cebola 15g, alface 5g, 1 fatia de pão e molho janonês',
  price: 10000,
  onClick: () => {},
  btnText: 'Adicionar ao carrinho',
  variant: 'miniProduct',
};

export const Restaurant = Template.bind({});
Restaurant.args = {
  image: {
    small: 'absolut-300w.png',
    medium: 'absolut-600w.png',
  },
  logo: '/products/absolut-600w.png',
  storeName: 'Veneza',
  isOpen: true,
  limitHour: 17,
  likes: 52,
  distanceMin: 10,
  onClick: () => {},
  variant: 'restaurant',
};

export const MiniRestaurant = Template.bind({});
MiniRestaurant.args = {
  image: {
    small: 'absolut-300w.png',
    medium: 'absolut-600w.png',
  },
  logo: '/products/absolut-600w.png',
  storeName: 'Veneza',
  isOpen: true,
  limitHour: 17,
  likes: 52,
  distanceMin: 10,
  onClick: () => {},
  variant: 'miniRestaurant',
};
