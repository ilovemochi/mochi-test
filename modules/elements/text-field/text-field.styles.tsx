import styled from 'styled-components';
import { system, variant } from 'styled-system';

import { PurpleHover } from '../../../styles';
import View from '../view';
import { InputProps } from './text-field.types';

export const InputField = styled('input')<InputProps>(
  {
    margin: '1rem 0',
    border: 'none',
    width: '100%',
    outline: 'none',
    padding: '0.5rem',
    background: 'transparent',
    borderBottom: '0.1rem solid',
  },
  variant({
    scale: 'fieldWrappers',
  }),
  system({
    center: {
      property: 'textAlign',
    },
    padding: {
      properties: ['paddingLeft', 'paddingRight'],
    },
  })
);

export const InputWrapper = styled(View)`
  .lock,
  .eye {
    color: ${props => props.theme.colors.border};
    font-size: 1.8rem;
    cursor: pointer;
    position: relative;
    ${PurpleHover(true)};
  }
  .eye {
    margin-left: -2.4rem;
    margin-right: 0.6rem;
  }
  .lock {
    margin-left: 0.6rem;
    margin-right: -2.4rem;
  }
`;
