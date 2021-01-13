import { CSSProperties } from 'styled-components';
import { ColorProps, SpaceProps, TypographyProps } from 'styled-system';

import { Theme } from '../../design-system';

export type TextVariant = keyof Theme['texts'];

export interface TextProps extends ColorProps, SpaceProps, TypographyProps {
  textTransform?: CSSProperties['textTransform'];
  variant: TextVariant;
}
