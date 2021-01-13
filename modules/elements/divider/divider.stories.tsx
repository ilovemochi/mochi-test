// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from '@storybook/react/types-6-0';
import { ReactNode } from 'react';

import { fontSizes } from '../../design-system';
import Text from '../text';
import View from '../view';
import Divider, { DividerProps } from './index';

export default {
  title: 'Divider',
  component: Divider,
} as Meta;

interface Props extends DividerProps {
  children: ReactNode;
}

const Template: Story<Props> = args => (
  <View>
    <Text variant="inline">Divider</Text>
    <Divider {...args} />
    <Text variant="inline">Divider</Text>
  </View>
);

export const Vertical = Template.bind({});
Vertical.args = {
  height: fontSizes.Medium,
  color: 'accentTertiary',
  variant: 'vertical',
};
export const Horizontal = Template.bind({});
Horizontal.args = {
  width: '10rem',
  color: 'accentTertiary',
  variant: 'horizontal',
};
