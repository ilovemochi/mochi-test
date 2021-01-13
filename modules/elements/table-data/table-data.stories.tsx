// eslint-disable-next-line import/no-unresolved
import { Args, Meta, Story } from '@storybook/react/types-6-0';
import { ReactNode } from 'react';

import Td from './index';

export default {
  title: 'Table Data',
  component: Td,
} as Meta;

interface Props extends Args {
  children: ReactNode;
}

const Template: Story<Props> = args => <Td {...args}>{args.children || 'Text'}</Td>;

export const Default = Template.bind({});
Default.args = {
  children: 'cell data',
  color: '',
  lineHeight: '',
  fontWeight: 'normal',
  textTransform: 'capitalize',
  fontSize: '',
  textAlign: '',
  padding: '',
  margin: '',
};
