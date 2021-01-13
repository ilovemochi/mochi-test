import styled, { css } from 'styled-components';

import { theme } from '../../../styles/theme';

const CarouselNavButtonStyles = css`
  position: absolute;
  top: calc(50% - 3rem);
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.textInverted};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 1;

  &:hover {
    background-color: ${theme.color.dark};
    color: ${theme.color.white};
  }
`;

export const CarouselNavButtonPrev = styled.button`
  ${CarouselNavButtonStyles}
`;

export const CarouselNavButtonNext = styled.button`
  ${CarouselNavButtonStyles};
  right: 2rem;
`;
