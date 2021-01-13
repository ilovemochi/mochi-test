// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from '@storybook/react/types-6-0';
import { HTMLAttributes, ReactNode } from 'react';

import Text, { TextProps } from './index';

export default {
  title: 'Text',
  component: Text,
} as Meta;

interface Props extends TextProps {
  children: ReactNode;
}

const Template: Story<Props & HTMLAttributes<HTMLParagraphElement>> = args => (
  <Text {...args}>{args.children || 'Text'}</Text>
);

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'h1',
  children: 'Title/Heading 1',
  color: 'text',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: 'h2',
  children: 'Heading 2',
  color: 'text',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: 'h3',
  children: 'Heading 3',
  color: 'text',
};

export const Heading4 = Template.bind({});
Heading4.args = {
  variant: 'h4',
  children: 'Heading 4',
  color: 'text',
};

export const BodyLarge = Template.bind({});
BodyLarge.args = {
  variant: 'bodyLarge',
  children: 'Body Large',
  color: 'text',
};

export const Body = Template.bind({});
Body.args = {
  variant: 'body',
  children: 'Body',
};

export const Bold = Template.bind({});
Bold.args = {
  variant: 'bold',
  children: 'Bold',
  color: 'text',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'small',
  children: 'Small',
  color: 'text',
};

export const ButtonTextLarge = Template.bind({});
ButtonTextLarge.args = {
  variant: 'buttonTextLarge',
  children: 'Button Text Large',
  color: 'text',
};

export const ButtonText = Template.bind({});
ButtonText.args = {
  variant: 'buttonText',
  children: 'Button text',
  color: 'text',
};

export const ButtonTextSmall = Template.bind({});
ButtonTextSmall.args = {
  variant: 'buttonTextSmall',
  children: 'Button text small',
  color: 'text',
};

export const Link = Template.bind({});
Link.args = {
  variant: 'link',
  children: 'Link Text',
  color: 'text',
};
