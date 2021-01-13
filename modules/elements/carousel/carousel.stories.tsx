// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from '@storybook/react/types-6-0';
import { map } from 'ramda';
import { v4 } from 'uuid';

import Card from '../card';
import Carousel from './index';

export default {
  title: 'Carousel',
  component: Carousel,
} as Meta;

const Template: Story<any> = () => (
  <Carousel>
    {map(() => (
      <Card
        key={v4()}
        image={{
          small: 'absolut-300w.png',
          medium: 'absolut-600w.png',
        }}
        storeName="Mochi Store"
        productName="Amicone"
        onClick={() => {}}
        variant="essential"
      />
    ))([1, 2, 3, 4, 5, 6, 7, 8, 9])}
  </Carousel>
);

export const Essential = Template.bind({});
Essential.args = {
  itemsPerSlide: [1, 2, 3, 4, 5],
};
