import { css } from 'styled-components';

import { TFlexStyles } from './styles.types';

export const PurpleHover = (transition: boolean) => `
  ${
    transition &&
    `
      transition: color 0.25s ease-out;
    `
  };
  :hover {
    color: ${props => props.theme.color.accent};
  }
`;

export const FlexStyles: TFlexStyles = ({
  direction,
  justifyContent,
  alignItems,
  flex,
  flexWrap,
}) =>
  css`
    display: flex;
    ${flexWrap &&
    css`
      flex-wrap: ${flexWrap};
    `};
    ${flex &&
    css`
      flex ${flex};
    `};
    ${direction &&
    css`
      flex-direction: ${direction};
    `};
    ${justifyContent &&
    css`
      justify-content: ${justifyContent};
    `};
    ${alignItems &&
    css`
      align-items: ${alignItems};
    `};
  ` as Array<string>;
