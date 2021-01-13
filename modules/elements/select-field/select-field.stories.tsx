// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from '@storybook/react/types-6-0';

import SelectField, { SelectFieldProps } from './index';

export default {
  title: 'Select Field',
  component: SelectField,
} as Meta;

const Template: Story<SelectFieldProps> = args => <SelectField {...args} />;

export const Customizable = Template.bind({});
Customizable.args = {
  center: true,
  required: true,
  disabled: false,
  noBorder: false,
  readonly: false,
  noPadding: false,
  labelLess: false,
  defaultOptionDescription: undefined,
  width: '35rem',
  label: 'Gênero',
  name: 'gender',
  options: ['male', 'female', 'other'],
  onChange: () => {},
};
