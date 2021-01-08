// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from '@storybook/react/types-6-0';

import TextField, { TextFieldProps } from './index';

export default {
  title: 'Text Field',
  component: TextField,
} as Meta;

const Template: Story<TextFieldProps> = args => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  center: true,
  required: true,
  disabled: false,
  noBorder: false,
  readonly: false,
  noPadding: false,
  labelLess: false,
  width: '35rem',
  label: 'Nome de usuário',
  placeholder: 'User placeholder',
  name: 'gender',
  type: 'text',
  onChange: () => {},
};

export const Password = Template.bind({});
Password.args = {
  center: true,
  required: true,
  disabled: false,
  noBorder: false,
  readonly: false,
  noPadding: false,
  labelLess: false,
  width: '35rem',
  label: 'Palavra-passe',
  placeholder: 'Palavra-passe placeholder',
  name: 'gender',
  type: 'password',
  onChange: () => {},
};
