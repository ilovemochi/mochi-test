import styled from 'styled-components';
import { color, layout, variant } from 'styled-system';

import { space } from '../../design-system';

// eslint-disable-next-line import/prefer-default-export
export const StyledDivider = styled('div')(
  variant({
    variants: {
      horizontal: {
        display: 'block',
        height: 0,
        borderTop: '0.1rem solid currentColor',
      },
      vertical: {
        display: 'inline-block',
        width: 0,
        paddingRight: space.M,
        marginRight: space.M,
        borderRight: '0.1rem solid currentColor',
      },
    },
  }),
  color,
  layout
);
