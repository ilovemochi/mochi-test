import { CSSProperties } from 'styled-components';
import {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export interface ViewProps
  extends LayoutProps,
    FlexboxProps,
    TypographyProps,
    SpaceProps,
    ShadowProps,
    BoxShadowProps,
    PositionProps,
    ColorProps,
    BorderProps {
  cursor?: CSSProperties['cursor'];
}
