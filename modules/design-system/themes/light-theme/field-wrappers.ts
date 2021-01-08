import { palette } from '../../palette';

export const normal = {
  borderBottom: `0.1rem solid ${palette.NEUTRAL_400}`,
  '&:focus-within': {
    borderColor: palette.NEUTRAL_800,
  },
};

export const enhanced = {
  border: 'none',
  '&:focus-within': {
    border: 'none',
  },
};
