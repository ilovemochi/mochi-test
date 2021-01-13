import { CSSProperties } from 'styled-components';
import { ColorProps, SpaceProps, TypographyProps } from 'styled-system';

export interface TdProps extends ColorProps, TypographyProps, SpaceProps {
  textTransform?: CSSProperties['textTransform'];
}
