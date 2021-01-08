import styled from 'styled-components';
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  system,
  typography,
} from 'styled-system';

import { ViewProps } from './view.types';

const View = styled('div')<ViewProps>(
  compose(
    border,
    color,
    shadow,
    position,
    space,
    flexbox,
    layout,
    typography,
    system({
      cursor: {
        property: 'cursor',
      },
    })
  )
);

export default View;
