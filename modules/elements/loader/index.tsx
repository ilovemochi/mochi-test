import { palette } from '@design-system';
import { FC } from 'react';

import View from '../view';
import Dot from './loader.styles';
import { LoaderDotProps } from './loader.types';

const Loader: FC<LoaderDotProps> = ({ color, size = '6rem' }) => (
  <View
    display="flex"
    alignItems="flex-end"
    flexWrap="wrap"
    justifyContent="space-around"
    width={size}
    mt={`calc(${size} / 10)`}
  >
    <Dot size={`calc(${size} / 10)`} delay="0s" bg={color || palette.ERROR_200} />
    <Dot size={`calc(${size} / 10)`} delay=".1s" bg={color || palette.WARNING_200} />
    <Dot size={`calc(${size} / 10)`} delay=".2s" bg={color || palette.SUCCESS_200} />
    <Dot size={`calc(${size} / 10)`} delay=".3s" bg={color || palette.LINK_200} />
    <Dot size={`calc(${size} / 10)`} delay=".4s" bg={color || palette.PRIMARY_100} />
  </View>
);

export default Loader;

export * from './loader.types';
