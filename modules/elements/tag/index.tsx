import { FC } from 'react';

import Text from '../text';
import View from '../view';
import { TagProps } from './tag.types';

const Tag: FC<TagProps> = ({ red, children }) => (
  <View
    display="inline-block"
    py="M"
    px="L"
    borderRadius="M"
    bg={red ? 'errorTertiary' : 'successTertiary'}
  >
    <Text variant="small" color="textInverted">
      {children}
    </Text>
  </View>
);

export default Tag;
