import { IStyles } from '@typescript';
import { addStyles } from '@utils/helper-functions';
import styled from 'styled-components';

import { PurpleHover } from '../../styles';

export const InputField = styled.input<IStyles>`
  margin: 1rem 0;
  border: none;
  width: 100%;
  outline: none;
  padding: 0.5rem;
  background: transparent;
  border-bottom: 0.1rem solid ${props => props.theme.color.dark15};

  :focus {
    border-bottom: 0.1rem solid ${props => props.theme.color.dark};
  }
  ${props => addStyles(props.styles)};
`;

export const InputWrapper = styled.div<IStyles>`
  margin: 1rem 0;
  display: block;
  min-width: 25rem;
  position: relative;

  .lock {
    ${props => addStyles(props.styles)};
    color: ${props => props.theme.color.dark15};
    font-size: 1.8rem;
    margin-right: -2.4rem;
    margin-left: 0.6rem;
    cursor: pointer;
    position: relative;
    ${PurpleHover(true)};
  }

  .eye {
    ${props => addStyles(props.styles)};
    color: ${props => props.theme.color.dark15};
    font-size: 1.8rem;
    margin-left: -2.4rem;
    margin-right: 0.6rem;
    cursor: pointer;
    position: relative;
    ${PurpleHover(true)};
  }
`;
