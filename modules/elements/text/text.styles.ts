import styled, { AnyStyledComponent } from 'styled-components';
import { color, space, system, typography, variant } from 'styled-system';

import { TextVariant } from './text.types';

const variantMap = ({
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  link: 'span',
  inline: 'span',
  inlineBold: 'span',
  buttonText: 'span',
  buttonTextLarge: 'span',
  buttonTextPrice: 'span',
  label: 'label',
} as unknown) as Record<TextVariant, AnyStyledComponent>;

export const textStyle = (x: TextVariant) =>
  styled(variantMap[x] || 'p')(
    variant({
      scale: 'texts',
    }),
    system({ textTransform: true }),
    color,
    space,
    typography
  );

export default textStyle;
