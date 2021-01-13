// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from '@storybook/react/types-6-0';
import { ReactNode } from 'react';

import Checkbox, { CheckboxProps } from './index';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta;

interface Props extends CheckboxProps {
  children: ReactNode;
}

const Template: Story<Props> = args => <Checkbox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  color: 'accentTertiary',
  disabled: false,
  active: false,
  textColor: 'grayQuinary',
  variant: 'normal',
  label: 'CheckBox Label',
};

export const Rounded = Template.bind({});
Rounded.args = {
  color: 'accentTertiary',
  active: false,
  disabled: false,
  textColor: 'grayQuinary',
  variant: 'rounded',
  label: 'CheckBox Label',
};
