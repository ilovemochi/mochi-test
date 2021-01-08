export const letterSpacings = {
  S: (size: string) => `calc(${size} * -0.02)`,
  M: (size: string) => `calc(${size} * 0)`,
  L: (size: string) => `calc(${size} * 0.03)`,
  XL: (size: string) => `calc(${size} * 0.1)`,
};

export type LetterSpacings = typeof letterSpacings;
