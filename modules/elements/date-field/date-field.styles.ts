import { fontSizes, space } from '@design-system';
import styled from 'styled-components';
import { system, variant } from 'styled-system';

export const DateInputWrapper: any = styled('div')(
  {
    display: 'block',
    width: '100%',
    margin: '1rem 0',
    minWidth: '25rem',
    '.DateInput_input, .DateInput, .SingleDatePickerInput, .SingleDatePicker': {
      width: '100%',
    },
    '.SingleDatePickerInput__disabled, .DateInput__disabled': {
      background: 'transparent !important',
    },
    '.DateInput_input__disabled': {
      fontStyle: 'normal',
      color: 'graySecondary',
    },
    '.DateInput__disabled .SingleDatePickerInput__withBorder': {
      border: 'none',
      outline: 'none',
    },
    button: {
      boxSizing: 'border-box',
    },
  },
  variant({
    variants: {
      normal: {
        '.DateInput_input': {
          textAlign: 'center',
          paddingRight: `calc(${space.L} * 3.5)`,
        },
      },
      enhanced: {
        '.DateInput_input': {
          textAlign: 'left',
          padding: 0,
        },
      },
    },
  }),
  system({
    w: {
      property: 'width',
    },
  })
);

export const FieldWrapper: any = styled('div')(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&::after': {
      content: '',
      width: fontSizes.Medium,
      padding: 'M',
    },
  },
  variant({
    scale: 'fieldWrapper',
  })
);

export const CalendarIconWrapper: any = styled('div')(
  {
    padding: 'M',
  },
  variant({
    variants: {
      normal: {
        color: 'currentColor',
        cursor: 'pointer',
      },
      disabled: {
        color: 'grayTertiary',
        cursor: 'default',
      },
    },
  })
);
