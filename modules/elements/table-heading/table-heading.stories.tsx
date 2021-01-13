// eslint-disable-next-line import/no-unresolved
import { Args, Meta, Story } from '@storybook/react/types-6-0';
import { ReactNode } from 'react';

import Th from './index';

export default {
  title: 'Table Heading',
  component: Th,
} as Meta;

interface Props extends Args {
  children: ReactNode;
}

const Template: Story<Props> = args => <Th {...args}>{args.children || 'Text'}</Th>;

export const Default = Template.bind({});
Default.args = {
  children: 'Heading',
  color: '',
  lineHeight: '',
  fontSize: '',
  textTransform: 'uppercase',
  textAlign: '',
  padding: '',
  margin: '',
};
