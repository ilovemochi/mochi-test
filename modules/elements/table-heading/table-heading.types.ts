import { CSSProperties } from 'styled-components';
import { ColorProps, SpaceProps, TypographyProps } from 'styled-system';

export interface ThProps extends TypographyProps, SpaceProps, ColorProps {
  textTransform?: CSSProperties['textTransform'];
}
