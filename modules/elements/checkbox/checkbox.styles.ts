import styled from 'styled-components';
import { color, layout, variant } from 'styled-system';

import { FlexStyles } from '../../../styles';
import { fontSizes, space } from '../../design-system';
import { CheckboxProps } from './checkout.types';

export const CheckboxLabel = styled.label`
  ${FlexStyles({
    alignItems: 'center',
  })}
  display: inline-flex;
`;

export const StyledCheckbox = styled('span')<Omit<CheckboxProps, 'label'>>(
  {
    all: 'unset',
    display: 'inline-block',
    width: fontSizes.Medium,
    height: fontSizes.Medium,
    boxShadow: '0 0 0 0.2rem currentColor',
    cursor: 'pointer',
    margin: space.M,
    '&:disabled': {
      cursor: 'default',
    },
  },
  variant({
    scale: 'checkboxes',
  }),
  layout,
  color
);
