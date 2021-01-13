// eslint-disable-next-line import/no-unresolved
import { Meta, Story } from '@storybook/react/types-6-0';
import { always } from 'ramda';
import { FaLock } from 'react-icons/fa';

import View from '../view';
import { RenderCollapsiblesProps } from './collapsible.types';
import Collapsible, { CollapsibleProps, renderCollapsibles } from './index';

export default {
  title: 'Collapsible',
  component: Collapsible,
} as Meta;

const props = {
  Icon: always(<FaLock />),
  inline: false,
  opened: false,
  content:
    'Nisi sunt culpa dolore enim nulla occaecat consectetur exercitation Lorem. Sunt excepteur consectetur nostrud exercitation eu velit sint laboris ad adipisicing laboris. Esse proident do aute nostrud qui consectetur. Eiusmod consectetur ex culpa minim ullamco cupidatat reprehenderit Lorem sunt.',
  title: 'Tap to collapse',
};

const Template: Story<CollapsibleProps> = args => (
  <View borderRadius="L" bg="foreground">
    <Collapsible {...args} />
  </View>
);

const GroupTemplate: Story<RenderCollapsiblesProps> = args => (
  <View borderRadius="L" bg="foreground">
    {renderCollapsibles(args)}
  </View>
);

export const Normal = Template.bind({});
Normal.args = {
  ...props,
  Icon: always(null),
};

export const WithIcon = Template.bind({});
WithIcon.args = props;

export const Collection = GroupTemplate.bind({});
Collection.args = {
  data: [props, props, props, props, props, props],
};
