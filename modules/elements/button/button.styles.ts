import styled from 'styled-components';
import { layout, space, variant } from 'styled-system';

import {
  fontSizes,
  letterSpacings,
  lineHeights,
  radii,
  space as themeSpace,
} from '../../design-system';

const StyledButton = styled('button')(
  {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    padding: `calc(${themeSpace.L} + ${themeSpace.XS}) ${themeSpace.XXL}`,
    borderRadius: radii.L,
    lineHeight: lineHeights.M,
    letterSpacing: letterSpacings.XL(fontSizes.Large),
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 'Medium',
  },
  variant({ scale: 'buttons' }),
  space,
  layout
);

export default StyledButton;
