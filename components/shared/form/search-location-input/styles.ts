import styled from 'styled-components';

import { theme } from '../../../../styles/theme';

export const PredictionsWrapper = styled.ul<{ width: string; left: string }>`
  position: absolute;
  top: 8.1rem;
  left: ${props => props.left};
  background-color: white;
  z-index: 3;
  width: ${props => props.width};
  max-height: 220px;
  overflow-y: scroll;
  overflow-x: hidden;

  box-shadow: rgba(16, 25, 30, 0.08) 0 1px 4px 0;
  border-left: 1px solid rgba(45, 49, 56, 0.08);
  border-top: none;

  @keyframes move {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.02);
    }

    100% {
      transform: scale(1);
    }
  }

  animation: move 1.5s ease-in-out;
  animation-iteration-count: 2;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const PredictionItem = styled.li`
  list-style: none;
  cursor: pointer;

  &:hover {
    background-color: ${theme.color.dark8};
  }
`;

export const PredictionButton = styled.button`
  padding: 1.3rem 2rem;
  width: 100%;
  height: 100%;
  font-size: 1.3rem;
`;
