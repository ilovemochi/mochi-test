// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from '@storybook/react/types-6-0';

import { MochiImageProps } from './image.types';
import MochiImage from './index';

export default {
  title: 'Mochi Image',
  component: MochiImage,
} as Meta;

const Template: Story<MochiImageProps> = args => <MochiImage {...args} />;

export const Square = Template.bind({});
Square.args = {
  border: '0.1rem solid gray',
  height: '10rem',
  width: '10rem',
  imageProps: {
    src: '/products/absolut-600w.png',
  },
};

export const Rounded = Template.bind({});
Rounded.args = {
  borderRadius: '50%',
  border: '0.1rem solid gray',
  height: '10rem',
  width: '10rem',
  imageProps: {
    src: '/products/absolut-600w.png',
  },
};
