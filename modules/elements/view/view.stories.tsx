// eslint-disable-next-line import/no-unresolved
import { Args, Meta, Story } from '@storybook/react/types-6-0';
import { ReactNode } from 'react';

import { radii, space } from '../../design-system';
import Text from '../text';
import View from './index';

export default {
  title: 'View',
  component: View,
} as Meta;

interface Props extends Args {
  children: ReactNode;
}

const Template: Story<Props> = args => <View {...args}>{args.children || 'Text'}</View>;

export const FullWidth = Template.bind({});
FullWidth.args = {
  width: '100%',
  bg: 'blue',
  p: '2rem',
  children: (
    <Text variant="body" color="white">
      Full Width
    </Text>
  ),
};

export const FullFlexWidth = Template.bind({});
FullFlexWidth.args = {
  width: '100%',
  bg: 'blue',
  p: '2rem',
  display: 'flex',
  justifyContent: 'center',
  children: (
    <Text variant="body" color="white">
      Full Flex Width
    </Text>
  ),
};

export const HalfWidth = Template.bind({});
HalfWidth.args = {
  width: '50%',
  borderRadius: `${radii.XL}`,
  boxShadow: '0 0 0.5rem gray',
  p: space.XL,
  children: <Text variant="small">Half Width</Text>,
};
