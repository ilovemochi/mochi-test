import { fontSizes } from '../font-sizes';
import { letterSpacings } from '../letter-spacings';
import { lineHeights } from '../line-heights';
import { palette } from '../palette';
import { space } from '../space';

export const h1 = {
  lineHeight: lineHeights.S,
  letterSpacing: letterSpacings.S(fontSizes.H1),
  fontWeight: 'normal',
  fontSize: fontSizes.H1,
};

export const h2 = {
  lineHeight: lineHeights.S,
  letterSpacing: letterSpacings.S(fontSizes.H2),
  fontSize: fontSizes.H2,
};

export const h3 = {
  lineHeight: lineHeights.S,
  letterSpacing: letterSpacings.S(fontSizes.H3),
  fontSize: fontSizes.H3,
};

export const h4 = {
  lineHeight: lineHeights.S,
  letterSpacing: letterSpacings.S(fontSizes.H4),
  fontSize: fontSizes.H4,
};

export const t1 = h1;

export const t2 = h2;

export const t3 = h3;

export const t4 = h4;

export const bodyLarge = {
  lineHeight: lineHeights.M,
  fontSize: fontSizes.Large,
  fontWeight: 500,
};

export const body = {
  lineHeight: lineHeights.M,
  fontSize: fontSizes.Medium,
};

export const inline = {
  lineHeight: lineHeights.M,
  fontSize: fontSizes.Medium,
};
export const inlineBold = {
  lineHeight: lineHeights.M,
  fontSize: fontSizes.Medium,
  fontWeight: 700,
};

export const label = {
  lineHeight: lineHeights.M,
  fontSize: fontSizes.Medium,
};

export const bold = {
  lineHeight: lineHeights.M,
  fontSize: fontSizes.Medium,
  fontWeight: 700,
};

export const small = {
  lineHeight: lineHeights.M,
  fontSize: fontSizes.Small,
};

export const buttonTextLarge = {
  lineHeight: lineHeights.M,
  letterSpacing: letterSpacings.XL(fontSizes.Medium),
  fontWeight: 'bold',
  fontSize: fontSizes.Large,
  padding: `0 ${space.S}`,
};

export const buttonText = {
  lineHeight: lineHeights.M,
  letterSpacing: letterSpacings.XL(fontSizes.Large),
  fontWeight: 'bold',
  fontSize: fontSizes.Medium,
  padding: `0 ${space.M}`,
};

export const buttonTextSmall = {
  lineHeight: lineHeights.M,
  letterSpacing: letterSpacings.XL(fontSizes.Large),
  fontWeight: 'bold',
  fontSize: fontSizes.ExtraSmall,
  padding: `0 ${space.M}`,
};

export const link = {
  lineHeight: lineHeights.M,
  fontSize: fontSizes.Medium,
  fontWeight: 'bold',
  cursor: 'pointer',
  color: palette.LINK_500,
  '&:hover': {
    color: palette.LINK_400,
    textDecoration: 'underline',
  },
};
