// eslint-disable-next-line import/no-unresolved
import { Args, Meta, Story } from '@storybook/react/types-6-0';
import { ReactNode } from 'react';

import Tag from './index';

export default {
  title: 'Tag',
  component: Tag,
} as Meta;

interface Props extends Args {
  children: ReactNode;
}

const Template: Story<Props> = args => <Tag {...args}>{args.children || 'Text'}</Tag>;

export const Heading1 = Template.bind({});
Heading1.args = {
  red: false,
  children: 'Tag',
};
