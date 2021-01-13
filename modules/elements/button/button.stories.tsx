// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from '@storybook/react/types-6-0';
import { ReactNode } from 'react';
import { FaUserCircle } from 'react-icons/fa';

import { fontSizes, space } from '../../design-system';
import Text from '../text';
import Button, { ButtonProps } from './index';

export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

interface Props extends ButtonProps {
  children: ReactNode;
}

const Template: Story<Props> = args => <Button {...args}>{args.children || 'Button'}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  variant: 'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: false,
  variant: 'secondary',
  children: 'Secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  disabled: false,
  variant: 'tertiary',
  children: 'Tertiary',
};

export const Large = Template.bind({});
Large.args = {
  disabled: false,
  variant: 'large',
  children: 'Large',
};

export const Small = Template.bind({});
Small.args = {
  disabled: false,
  variant: 'small',
  children: 'Small',
};

export const Price = Template.bind({});
Price.args = {
  disabled: false,
  variant: 'primary',
  'aria-labelledby': 'button-text',
  px: space.L,
  children: (
    <>
      <Text variant="buttonTextSmall">AOA XXXXXX </Text>
      <Text variant="buttonTextSmall">Price</Text>
    </>
  ),
};

export const Icon = Template.bind({});
Icon.args = {
  disabled: false,
  variant: 'icon',
  children: <FaUserCircle aria-hidden="true" focusable="false" size={fontSizes.H4} />,
};

export const LabelledIcon = Template.bind({});
LabelledIcon.args = {
  disabled: false,
  variant: 'labelledIcon',
  children: (
    <>
      <FaUserCircle aria-hidden="true" focusable="false" size={fontSizes.H4} />
      <Text variant="buttonText">Labelled Button</Text>
    </>
  ),
};

export const Warning = Template.bind({});
Warning.args = {
  disabled: false,
  variant: 'warning',
  children: 'Warning',
};

export const Error = Template.bind({});
Error.args = {
  disabled: false,
  variant: 'error',
  children: 'Error',
};

export const Success = Template.bind({});
Success.args = {
  disabled: false,
  variant: 'success',
  children: 'Success',
};
