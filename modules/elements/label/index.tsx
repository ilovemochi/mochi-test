import { FC } from 'react';

import Text from '../text';
import View from '../view';
import { LabelProps } from './label.types';

const Label: FC<LabelProps> = ({ labelLess, label, center, required, ...args }) => (
  <>
    {!labelLess ? (
      <View my="M" width="100%" textAlign={center ? 'center' : 'start'} {...args}>
        <Text variant="label">
          {label}
          {required ? ' *' : ''}
        </Text>
      </View>
    ) : null}
  </>
);

export default Label;

export * from './label.types';
