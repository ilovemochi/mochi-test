// 1 rem = 10px in our project because we manipulate the font size in the global styles
// We will ignore t-shirt sizes for font sizes because it does not give enough room
export const fontSizes = {
  H1: '6.8rem',
  H2: '5rem',
  H3: '3.8rem',
  H4: '2.8rem',
  Large: '2.1rem',
  Medium: '1.6rem',
  Small: '1.4rem',
  ExtraSmall: '1.2rem',
};

export type FontSizes = typeof fontSizes;
