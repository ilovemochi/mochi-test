import styled, { keyframes } from 'styled-components';

// Styles taken from
// https://iamsteve.me/blog/entry/nice-and-easy-lazy-loading-with-lazysizes-js

const scaleOut = keyframes`
  0% {
    transform: scale(0); }

  100% {
    transform: scale(1);
    opacity: 0; }
`;

// eslint-disable-next-line import/prefer-default-export
export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .lazyload,
  .lazyloading {
    opacity: 0;
  }

  .lazyload,
  .lazyloaded,
  & {
    opacity: 1;
    transition: 2s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  :before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    margin-top: -16px;
    margin-left: -16px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    animation: ${scaleOut} 1.2s infinite ease-in-out;
    background-color: ${props => props.theme.colors.accent};
  }

  img {
    position: relative;
    width: 100%;
    max-height: 100%;
    z-index: 0;
    object-fit: contain;
  }
`;
