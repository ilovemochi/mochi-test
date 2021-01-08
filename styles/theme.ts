import { createGlobalStyle } from 'styled-components';

export const theme = {
  color: {
    accent: 'rgb(116,92,160)',
    lightAccent: 'rgb(172,142,227)',
    darkAccent: 'rgb(81,38,159)',
    green: 'rgb(3,168, 124)',
    lightGreen: 'rgb(204,255,191)',
    red: 'rgb(255,79,82)',
    lightRed: 'rgb(255,199,208)',
    orange: 'rgb(255,163,77)',
    lightOrange: 'rgb(255,217,128)',
    blue: 'rgb(69,146,255)',
    darkBlue: 'rgb(48,122,219)',
    lightGray: 'rgb(238,239,239)',
    white: 'rgb(255,255,254)',
    background: 'rgb(252,252,255)',
    noir: 'rgb(56,63,69)',
    dark: 'rgb(40,47,54)',
    black: 'rgb(17,17,17)',
    dark80: 'rgba(40,47,54,0.8)',
    dark50: 'rgba(40,47,54,0.5)',
    dark30: 'rgba(40,47,54,0.3)',
    dark15: 'rgba(40,47,54,0.15)',
    dark8: 'rgba(40,47,54,0.08)',
    dark4: 'rgba(40,47,54,0.04)',
  },
  font: {
    small: '1.2rem',
    normal: '1.4rem',
    large: '1.8rem',
    extraLarge: '3rem',
    h6: '1.4rem',
    h5: '1.6rem',
    h4: '2rem',
    h3: '2.5rem',
    h2: '4rem',
    h1: '5.5rem',
  },
  shadow: {
    normal: '0 0.1rem 3px 0 rgba(0, 0, 0, 0.1), 0 0.1rem 2px 0 rgba(0, 0, 0, 0.06)',
    inset: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    buttonFocus: '0 0.5rem 1rem rgba(0,0,0,0.2)',
    buttonHover: '0 1rem 2rem rgba(0,0,0,0.2)',
  },
} as const;

export type ThemeFont = typeof theme.font;

/**
 * @deprecated this is needs to be refactored to a new Global Style
 */
export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin            : 0;
  padding           : 0;
  box-sizing        : inherit;
}
html {
  font-size: 62.5%;
}
body {
  box-sizing        : border-box;
  position          : relative;
  font-weight: 400;
  background-color: ${theme.color.background};
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  
  .SingleDatePicker_picker__portal {
    z-index: 100;
  }
  
  .DayPickerKeyboardShortcuts_show__topLeft::before  {
  border-left: 33px solid rgb(116,92,160)
  }
}

h1 {
  font-size: ${theme.font.h1};
}

h2 {
  font-size: ${theme.font.h2};
}

h3 {
  font-size: ${theme.font.h3};
}

h4 {
  font-size: ${theme.font.h4};
}

h5 {
  font-size: ${theme.font.h5};
}

h6 {
  font-size: ${theme.font.h6};
}

a {
  text-decoration: none;
  color: inherit;
  border-bottom-style: none;
}

button {
  all: unset;
}

input:focus, textarea:focus, select:focus{
  outline: none;
}
input:required {
  box-shadow:none;
}
input:invalid {
  box-shadow: none;
}
`;
