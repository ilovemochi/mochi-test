import { FC } from 'react';

import Text from '../text';
import View from '../view';

export interface Props {
  labelLess: boolean;
  label: string;
  center: boolean;
  required: boolean;
}

const Label: FC<Props> = ({ labelLess, label, center, required }) => (
  <>
    {!labelLess ? (
      <View margin={['0.7rem', '0']}>
        <Text center={center} dark capitalize>
          {label}
          {required ? ' *' : ''}
        </Text>
      </View>
    ) : null}
  </>
);

export default Label;
