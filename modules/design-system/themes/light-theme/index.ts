import { breakpoints } from '../../breakpoints';
import { fontSizes } from '../../font-sizes';
import { letterSpacings } from '../../letter-spacings';
import { lineHeights } from '../../line-heights';
import { radii } from '../../radii';
import { space } from '../../space';
import * as texts from '../texts';
import * as buttons from './buttons';
import * as checkboxes from './checkboxes';
import { colors } from './colors';
import * as fieldWrappers from './field-wrappers';

export const LightTheme = {
  colors,
  fontSizes,
  radii,
  space,
  lineHeights,
  letterSpacings,
  breakpoints,
  buttons,
  checkboxes,
  fieldWrappers,
  texts,
};

export type Theme = typeof LightTheme;
