import { theme } from '../../styles/theme';

const DEFAULT_CONFIG = {
  GOOGLE_MAPS_SCRIPT_ID: 'google-autocomplete-script',
  NEXT_NPROGRESS: {
    easing: 'ease',
    speed: 500,
  },
  COMPONENT_RESTRICTIONS: { country: ['pt', 'ao'] },
  STRIPE_CARD_OPTIONS: {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: theme.color.dark80,
        color: theme.color.dark,
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {
          color: theme.color.accent,
        },
        '::placeholder': {
          color: 'rgba(172, 142, 227, 0.4)',
        },
      },
      invalid: {
        iconColor: theme.color.red,
        color: theme.color.red,
      },
    },
  },
  STRIPE_ELEMENTS_OPTIONS: {
    fonts: [
      {
        cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
      },
    ],
  },
};

export default DEFAULT_CONFIG;
