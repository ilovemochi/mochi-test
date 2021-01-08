import { fontSizes } from '../../font-sizes';
import { letterSpacings } from '../../letter-spacings';
import { palette as colors } from '../../palette';
import { radii } from '../../radii';
import { space } from '../../space';

export const primary = {
  color: colors.WHITE,
  backgroundColor: colors.PRIMARY_300,
  '&:hover': {
    backgroundColor: colors.PRIMARY_200,
  },
  '&:focus': {
    backgroundColor: colors.PRIMARY_300,
  },
  '&:active': {
    backgroundColor: colors.PRIMARY_100,
  },
  '&:disabled': {
    backgroundColor: colors.NEUTRAL_500,
    cursor: 'default' as const,
  },
};

export const secondary = {
  border: '0.2rem solid' as const,
  borderColor: colors.PRIMARY_200,
  color: colors.PRIMARY_300,
  '&:hover': {
    borderColor: colors.PRIMARY_200,
    backgroundColor: colors.PRIMARY_200,
    color: colors.WHITE,
  },
  '&:focus': {
    borderColor: colors.PRIMARY_200,
    backgroundColor: colors.PRIMARY_200,
    color: colors.WHITE,
  },
  '&:active': {
    borderColor: colors.PRIMARY_100,
    backgroundColor: colors.PRIMARY_100,
    color: colors.WHITE,
  },
  '&:disabled': {
    borderColor: colors.NEUTRAL_500,
    color: colors.NEUTRAL_500,
    backgroundColor: 'transparent',
    cursor: 'default' as const,
  },
};

export const tertiary = {
  color: colors.PRIMARY_300,
  '&:hover': {
    backgroundColor: colors.PRIMARY_200,
    color: colors.WHITE,
  },
  '&:focus': {
    backgroundColor: colors.PRIMARY_200,
    color: colors.WHITE,
  },
  '&:active': {
    backgroundColor: colors.PRIMARY_100,
    color: colors.WHITE,
  },
  '&:disabled': {
    color: colors.NEUTRAL_500,
    backgroundColor: 'transparent' as const,
    cursor: 'default' as const,
  },
};

export const large = {
  padding: `calc(${space.L} + ${space.XS}) calc(${space.XL} * 4)`,
  color: colors.WHITE,
  backgroundColor: colors.PRIMARY_300,
  letterSpacing: letterSpacings.XL(fontSizes.Large),
  fontSize: fontSizes.Large,
  '&:hover': {
    backgroundColor: colors.PRIMARY_200,
  },
  '&:focus': {
    backgroundColor: colors.PRIMARY_200,
  },
  '&:active': {
    backgroundColor: colors.PRIMARY_100,
  },
  '&:disabled': {
    backgroundColor: colors.NEUTRAL_500,
    cursor: 'default' as const,
  },
};

export const small = {
  padding: `${space.M} calc(${space.XL} * 2)`,
  borderRadius: radii.M,
  color: colors.WHITE,
  backgroundColor: colors.PRIMARY_300,
  fontSize: fontSizes.Small,
  letterSpacing: letterSpacings.XL(fontSizes.Small),
  '&:hover': {
    backgroundColor: colors.PRIMARY_200,
  },
  '&:focus': {
    backgroundColor: colors.PRIMARY_200,
  },
  '&:active': {
    backgroundColor: colors.PRIMARY_100,
  },
  '&:disabled': {
    backgroundColor: colors.NEUTRAL_500,
    cursor: 'default' as const,
  },
};

export const icon = {
  padding: space.L,
  color: colors.WHITE,
  backgroundColor: colors.PRIMARY_300,
  fontSize: fontSizes.H4,
  alignItems: 'center',
  letterSpacing: letterSpacings.XL(fontSizes.Small),
  '&:hover': {
    backgroundColor: colors.PRIMARY_200,
  },
  '&:focus': {
    backgroundColor: colors.PRIMARY_200,
  },
  '&:active': {
    backgroundColor: colors.PRIMARY_100,
  },
  '&:disabled': {
    backgroundColor: colors.NEUTRAL_500,
    cursor: 'default' as const,
  },
};

export const labelledIcon = {
  alignItems: 'center',
  padding: space.L,
  color: colors.WHITE,
  backgroundColor: colors.PRIMARY_300,
  lineHeight: 'none',
  letterSpacing: letterSpacings.XL(fontSizes.Small),
  '&:hover': {
    backgroundColor: colors.PRIMARY_200,
  },
  '&:focus': {
    backgroundColor: colors.PRIMARY_200,
  },
  '&:active': {
    backgroundColor: colors.PRIMARY_100,
  },
  '&:disabled': {
    backgroundColor: colors.NEUTRAL_500,
    cursor: 'default' as const,
  },
};

export const error = {
  color: colors.WHITE,
  backgroundColor: colors.ERROR_300,
  '&:hover': {
    backgroundColor: colors.ERROR_200,
  },
  '&:focus': {
    backgroundColor: colors.ERROR_200,
  },
  '&:active': {
    backgroundColor: colors.ERROR_100,
  },
  '&:disabled': {
    backgroundColor: colors.NEUTRAL_500,
    cursor: 'default' as const,
  },
};

export const success = {
  color: colors.WHITE,
  backgroundColor: colors.SUCCESS_300,
  '&:hover': {
    backgroundColor: colors.SUCCESS_200,
  },
  '&:focus': {
    backgroundColor: colors.SUCCESS_200,
  },
  '&:active': {
    backgroundColor: colors.SUCCESS_100,
    color: colors.BLACK,
  },
  '&:disabled': {
    backgroundColor: colors.NEUTRAL_500,
    cursor: 'default' as const,
  },
};

export const warning = {
  color: colors.WHITE,
  backgroundColor: colors.WARNING_300,
  '&:hover': {
    backgroundColor: colors.WARNING_200,
  },
  '&:focus': {
    backgroundColor: colors.WARNING_200,
  },
  '&:active': {
    backgroundColor: colors.WARNING_100,
  },
  '&:disabled': {
    color: colors.WHITE,
    backgroundColor: colors.NEUTRAL_500,
    cursor: 'default' as const,
  },
};

export const rounded = {
  padding: 0,
  fontWeight: 'normal',
  color: colors.WHITE,
  backgroundColor: colors.PRIMARY_300,
  width: `calc(${space.L} * 3)`,
  height: `calc(${space.L} * 3)`,
  borderRadius: '50%',
  margin: `0 ${space.S}`,
  '&:hover': {
    backgroundColor: colors.PRIMARY_200,
  },
  '&:focus': {
    backgroundColor: colors.PRIMARY_300,
  },
  '&:active': {
    backgroundColor: colors.PRIMARY_100,
  },
  '&:disabled': {
    backgroundColor: colors.NEUTRAL_500,
    cursor: 'default' as const,
  },
};
