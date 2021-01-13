// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from '@storybook/react/types-6-0';

import Loader, { LoaderDotProps } from './index';

export default {
  title: 'Loader',
  component: Loader,
} as Meta;

const Template: Story<LoaderDotProps> = args => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: '',
};

export const Custom = Template.bind({});
Custom.args = {
  color: 'accentTertiary',
  size: '10rem',
};
