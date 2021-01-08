import { IStyles } from '@typescript';
import { addStyles } from '@utils/helper-functions';
import styled from 'styled-components';

const defaultBtnStyles = `
  cursor: pointer;
  transition: all 0.2s ease-in;
  box-sizing: border-box;
  
  :active :focus {
    transform: translateY(0.1rem);
    outline: none;
    box-shadow: ${props => props.theme.shadow.buttonFocus};
  }
  :hover {
    box-shadow: ${props => props.theme.shadow.buttonHover};
    transform: translateY(-0.3rem);
  }
  :disabled {
    opacity: 0.6;
    transform: translateY(0);
    box-shadow: none;
  }
`;

export const Btn = styled.button<IStyles>`
  min-height: 2.8rem;
  font-size: ${props => props.theme.font.normal};
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 2rem;
  margin: 1rem 0.5rem;
  border-radius: 0.5rem;
  ${defaultBtnStyles}
  ${props => addStyles(props.styles)};
  max-width: calc(100% - 1rem);
`;

export const BtnPrice = styled.button<IStyles>`
  font-weight: normal;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: 2.25rem;
  ${defaultBtnStyles}
  ${props => addStyles(props.styles)};
`;
