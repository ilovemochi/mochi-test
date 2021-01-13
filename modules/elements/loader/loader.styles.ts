import styled, { keyframes } from 'styled-components';
import { color, ColorProps, system } from 'styled-system';

const BounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-100%);
  }
  40% {
    transform: translateY(0);
  }
`;

const Dot = styled('div')<{ size: string; delay: string } & ColorProps>`
  margin: 0 5%;
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
  animation: ${BounceAnimation} 1s linear infinite;
  ${system({
    size: {
      properties: ['width', 'height'],
    },
    delay: {
      property: 'animationDelay',
    },
  })}
  ${color}
`;

export default Dot;
