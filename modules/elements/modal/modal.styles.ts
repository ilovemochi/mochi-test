import { minWidth } from '@utils/helper-functions';
import { FaTimes } from 'react-icons/fa';
import { Props } from 'react-modal';
import styled, { css } from 'styled-components';

import { FlexStyles } from '../../../styles';
import { theme } from '../../../styles/theme';

export const ModalWrapper = styled.div`
  .ReactModal__Overlay {
    opacity: 0;
    transform: translateY(-10%);
    transition: opacity 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95),
      transform 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
  .ReactModal__Overlay--after-open {
    opacity: 1;
    transform: translateY(0);
  }
  .ReactModal__Overlay--before-close {
    opacity: 0;
    transform: translateY(-10%);
  }
  .ReactModal__Body--open,
  .ReactModal__Html--open {
    overflow: hidden;
  }
`;

export const defaultModalStyles: Props['style'] = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 3,
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  content: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 0,
    padding: 0,
    border: 'none',
    outline: 'none',
    maxWidth: '100vw',
    maxHeight: '100vh',
    overflowX: 'hidden',
    position: 'relative',
    borderRadius: '0.5rem',
    backgroundColor: 'transparent',
    boxShadow: '0 0 1rem rgba(0, 0, 0, 0.25)',
  },
};

export const ModalContent = styled.div`
  margin: 0;
  width: 100vw;
  padding: 5rem 3rem;
  overflow-y: auto;
  max-height: 100vh;
  min-height: 100vh;
  background-color: ${theme.color.white};
  ${FlexStyles({ direction: 'column', justifyContent: 'center', alignItems: 'center' })};
  ${minWidth.forPhoneOnly(css`
    width: 600px;
    min-height: 200px;
  `)};
`;

export const CloseButtonWrapper = styled.div`
  top: 0;
  right: 0;
  display: block;
  padding: 0.5rem;
  position: absolute;
  ${FlexStyles({ justifyContent: 'flex-end' })}
`;

export const CloseIcon = styled(FaTimes)`
  opacity: 0.5;
  margin: 1rem;
  font-size: 2rem;
  cursor: pointer;
  transition: transform 300ms ease-in-out;
  :hover {
    opacity: 0.8;
    transform: rotate(90deg);
  }
`;
