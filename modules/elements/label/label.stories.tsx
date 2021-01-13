// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from '@storybook/react/types-6-0';
import { ReactNode } from 'react';

import View from '../view';
import Label, { LabelProps } from './index';

export default {
  title: 'Label',
  component: Label,
} as Meta;

interface Props extends LabelProps {
  children: ReactNode;
}

const Template: Story<Props> = args => (
  <View width="35rem">
    <Label {...args} />
  </View>
);

export const Default = Template.bind({});
Default.args = {
  center: true,
  required: true,
  labelLess: false,
  color: 'grayQuinary',
  label: 'Label',
};
