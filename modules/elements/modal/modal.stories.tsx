// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from '@storybook/react/types-6-0';
import { ReactNode } from 'react';

import Text from '../text';
import Modal, { ModalProps } from './index';

export default {
  title: 'Modal',
  component: Modal,
} as Meta;

interface Props extends ModalProps {
  children: ReactNode;
}

const Template: Story<Props> = args => <Modal {...args}>{args.children}</Modal>;

export const Normal = Template.bind({});
Normal.args = {
  isOpen: true,
  children: <Text variant="h1">Default</Text>,
};

export const Closeable = Template.bind({});
Closeable.args = {
  isOpen: true,
  onClose: () => {},
  children: <Text variant="h1">Cloaseable</Text>,
};
