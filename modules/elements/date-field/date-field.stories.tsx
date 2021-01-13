// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from '@storybook/react/types-6-0';
import { ReactNode } from 'react';

import DateField, { DateFieldProps } from './index';

export default {
  title: 'Date Field',
  component: DateField,
} as Meta;

interface Props extends DateFieldProps {
  children: ReactNode;
}

const Template: Story<Props> = args => <DateField {...args}>{args.children}</DateField>;

export const Default = Template.bind({});
Default.args = {
  enhancedStyle: false,
  center: true,
  required: true,
  labelLess: false,
  width: '35rem',
  disabled: false,
  label: 'data de nascimento',
  name: 'birthdate',
  defaultValues: new Date().toString(),
};
