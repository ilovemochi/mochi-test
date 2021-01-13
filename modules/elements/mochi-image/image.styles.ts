import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
} from 'styled-system';

const ImageWrapper = styled('div')<
  BorderProps & ColorProps & SpaceProps & LayoutProps & ShadowProps & HTMLAttributes<HTMLDivElement>
>(
  {
    overflow: 'hidden',
    zIndex: 1,
  },
  color,
  space,
  border,
  layout,
  shadow
);

export default ImageWrapper;
