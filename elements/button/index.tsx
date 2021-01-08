import { IGenericObject } from '@ilovemochi/types';
import { IOnClick, TButtonType } from '@typescript';
import { noop } from '@utils/helper-functions';
import { FC, HTMLAttributes, ReactNode } from 'react';
import { css, FlattenSimpleInterpolation } from 'styled-components';

import { theme } from '../../styles/theme';
import Divider from '../divider';
import Text from '../text';
import { Btn, BtnPrice } from './button.styles';

export interface Props {
  onClick?: IOnClick;
  accent?: boolean;
  white?: boolean;
  blue?: boolean;
  red?: boolean;
  normal?: boolean;
  small?: boolean;
  green?: boolean;
  shadow?: boolean;
  dark?: boolean;
  left?: boolean;
  full?: boolean;
  large?: boolean;
  bold?: boolean;
  price?: number;
  disabled?: boolean;
  bordered?: boolean;
  inline?: boolean;
  type?: TButtonType;
  children: ReactNode;
  customPadding?: string;
}

const Button: FC<Props & HTMLAttributes<HTMLButtonElement>> = ({
  accent,
  green,
  shadow,
  white,
  blue,
  dark,
  red,
  full,
  large,
  small,
  normal,
  left,
  bold,
  customPadding,
  children,
  price,
  bordered,
  inline,
  onClick = noop,
  ...otherProps
}) => {
  // eslint-disable-next-line no-param-reassign
  if (!small && !normal && !full && !large) normal = true;

  const StylesObject = {} as IGenericObject<FlattenSimpleInterpolation>;

  if (!accent && !blue && !green && !red && !white && bordered)
    StylesObject.base = css`
      border: 0.1rem solid ${theme.color.dark30};
      -webkit-text-fill-color: ${theme.color.dark80} !important;
      color: ${theme.color.dark80};
      :hover {
        border: 0.1rem solid ${theme.color.dark80};
      }
    `;

  if (left)
    StylesObject.left = css`
      justify-content: flex-start;
    `;

  if (accent)
    StylesObject.accent = css`
      ${bordered
        ? `
        border: 0.1rem solid ${theme.color.accent};
        -webkit-text-fill-color: ${theme.color.accent} !important;
        color: ${theme.color.accent} !important;
        :hover {
          background-color: ${theme.color.accent};
          -webkit-text-fill-color: ${theme.color.white} !important;
          color: ${theme.color.white} !important;
        }
      `
        : `
        background-color: ${theme.color.accent};
        -webkit-text-fill-color: ${theme.color.white} !important;
        color: ${theme.color.white}`} !important;
    `;

  if (green)
    StylesObject.green = css`
      ${bordered
        ? `
        border: 0.1rem solid  ${theme.color.green};
        -webkit-text-fill-color: ${theme.color.green} !important;
        color: ${theme.color.green} !important;
        :hover {
          background-color: ${theme.color.green};
          -webkit-text-fill-color: ${theme.color.white} !important;
          color: ${theme.color.white} !important;
        }
      `
        : `
        background-color: ${theme.color.green};
        -webkit-text-fill-color: ${theme.color.white} !important;
        color: ${theme.color.white};`} !important;
    `;

  if (dark)
    StylesObject.dark = css`
      ${bordered
        ? `
        border: 0.1rem solid ${theme.color.black};
        -webkit-text-fill-color: ${theme.color.black} !important;
        color: ${theme.color.black} !important;
        :hover {
          background-color: ${theme.color.black};
          -webkit-text-fill-color: ${theme.color.white} !important;
          color: ${theme.color.white} !important;
        }
      `
        : `
        background-color: ${theme.color.black};
        -webkit-text-fill-color: ${theme.color.white} !important;
        color: ${theme.color.white};`} !important;
    `;

  if (blue)
    StylesObject.blue = css`
      ${bordered
        ? `
        border: 0.1rem solid ${theme.color.blue};
        -webkit-text-fill-color: ${theme.color.blue} !important;
        color: ${theme.color.blue} !important;
        :hover {
          background-color: ${theme.color.blue};
          -webkit-text-fill-color: ${theme.color.white} !important;
          color: ${theme.color.white} !important;
        }
      `
        : `
      background-color: ${theme.color.blue};
      -webkit-text-fill-color: ${theme.color.white} !important;
      color: ${theme.color.white}`} !important;
    `;

  if (red)
    StylesObject.red = css`
      ${bordered
        ? `
        border: 0.1rem solid ${theme.color.red};
        -webkit-text-fill-color: ${theme.color.red} !important;
        color: ${theme.color.red} !important;
        :hover {
          background-color: ${theme.color.red};
          -webkit-text-fill-color: ${theme.color.white} !important;
          color: ${theme.color.white} !important;
        }
      `
        : `
        background-color: ${theme.color.red};
        -webkit-text-fill-color: ${theme.color.white} !important;
        color: ${theme.color.white}`} !important;
    `;

  if (shadow)
    StylesObject.shadow = css`
      box-shadow: ${theme.shadow.normal};
    `;

  if (customPadding)
    StylesObject.padding = css`
      padding: ${customPadding};
    `;

  if (white)
    StylesObject.white = css`
      ${bordered
        ? `
        border: 0.1rem solid ${theme.color.white};
        -webkit-text-fill-color: ${theme.color.white} !important;
        color: ${theme.color.white} !important;
        :hover {
          background-color: ${theme.color.white};
          -webkit-text-fill-color: ${theme.color.white} !important;
          color: ${theme.color.white} !important;
        }
      `
        : `
        background-color: ${theme.color.white};
        -webkit-text-fill-color: ${theme.color.dark} !important;
        color: ${theme.color.dark}`} !important;
    `;

  if (full)
    StylesObject.full = css`
      width: 100%;
    `;

  if (small && !price)
    StylesObject.small = css`
      width: 10.4rem;
    `;

  if (normal)
    StylesObject.normal = css`
      width: auto;
    `;

  if (inline)
    StylesObject.normal = css`
      width: auto;
      display: inline;
      margin: 0 0.5rem;
      padding: 0;
      :active :focus {
        transform: translateY(0);
        outline: none;
        box-shadow: none;
      }
      :hover {
        box-shadow: none;
        transform: translateY(0);
      }
    `;

  if (bold)
    StylesObject.bold = css`
      font-weight: bold;
    `;

  if (large)
    StylesObject.normal = css`
      width: 20em;
    `;

  if (price)
    return (
      <BtnPrice {...otherProps} styles={StylesObject} onClick={onClick}>
        <Text small white>
          {price}
        </Text>
        <Divider vertical white />
        <Text small capitalize>
          {children}
        </Text>
      </BtnPrice>
    );

  return (
    <Btn {...otherProps} styles={StylesObject} onClick={onClick}>
      {children}
    </Btn>
  );
};

export default Button;
