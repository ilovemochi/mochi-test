// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from '@storybook/react/types-6-0';

import LazyImage from './index';
import { LazyImageProps } from './lazy-image.types';

export default {
  title: 'Lazy Image',
  component: LazyImage,
} as Meta;

const Template: Story<LazyImageProps> = args => <LazyImage {...args} />;

export const Square = Template.bind({});
Square.args = {
  width: '400rem',
  height: '400rem',
  alt: 'Absolute',
  imageMap: {
    small: 'https://mochi-dev-images.s3.eu-west-3.amazonaws.com/products/absolut-300w.png',
    medium: 'https://mochi-dev-images.s3.eu-west-3.amazonaws.com/products/absolut-600w.png',
  },
};
