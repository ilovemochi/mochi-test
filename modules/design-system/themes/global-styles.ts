import { createGlobalStyle } from 'styled-components';

import { palette } from '../palette';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin            : 0;
    padding           : 0;
    box-sizing        : inherit;
  }
  html {
    font-size         : 62.5%;
  }
  body {
    box-sizing        : border-box;
    position          : relative;
    font-family       : -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    
    .SingleDatePicker_picker__portal {
      z-index         : 100;
    }
    
    .DayPickerKeyboardShortcuts_show__topLeft::before  {
      border-left     : 3.3rem solid ${palette.PRIMARY_200};
    }
  }
  .slick-list, .slick-track { touch-action: none; }

  a {
    text-decoration   : none;
    color             : inherit;
    border-bottom-style: none;
  }
  button {
    all               : unset;
  }
  input:focus, 
  textarea:focus, 
  select:focus {
    outline           : none;
  }
  input:required,
  input:invalid {
    box-shadow        : none;
  }
`;

export default GlobalStyle;
