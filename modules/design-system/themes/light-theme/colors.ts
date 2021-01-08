import { palette } from '../../palette';
import CommonColors from '../common-colors';

export const colors = {
  ...CommonColors,
  // Neutrals
  gray: palette.NEUTRAL_400,
  graySecondary: palette.NEUTRAL_500,
  grayTertiary: palette.NEUTRAL_600,
  grayQuaternary: palette.NEUTRAL_700,
  grayQuinary: palette.NEUTRAL_800,

  // Accents
  accent: palette.PRIMARY_100,
  accentSecondary: palette.PRIMARY_200,
  accentTertiary: palette.PRIMARY_300,
  accentHover: palette.PRIMARY_25,

  // Grounds
  background: palette.NEUTRAL_200,
  foreground: palette.NEUTRAL_100,

  // Texts
  text: palette.BLACK,
  textInverted: palette.WHITE,

  // Link
  link: palette.LINK_500,
  linkSecondary: palette.LINK_400,
};

export type Colors = typeof colors;
