import { FC, HTMLAttributes } from 'react';
import { css, FlattenSimpleInterpolation } from 'styled-components';

import { theme } from '../../styles/theme';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  TextExtraLarge,
  TextLarge,
  TextMedium,
  TextSmall,
} from './text.styles';

export interface Props {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  label?: boolean;
  left?: boolean;
  bold?: boolean;
  normal?: boolean;
  light?: boolean;
  center?: boolean;
  middle?: boolean;
  extraLarge?: boolean;
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  uppercase?: boolean;
  capitalize?: boolean;
  accent?: boolean;
  green?: boolean;
  otherProps?: HTMLAttributes<HTMLParagraphElement | HTMLLabelElement>;
  white?: boolean;
  dark?: boolean;
  inline?: boolean;
  dark80?: boolean;
  dark50?: boolean;
  dark30?: boolean;
  dark15?: boolean;
  dark8?: boolean;
  dark4?: boolean;
  red?: boolean;
  size?: string;
  width?: string;
  height?: string;
  lineThrough?: boolean;
  colorHover?: keyof typeof theme.color;
}

const Text: FC<Props & HTMLAttributes<HTMLParagraphElement | HTMLLabelElement>> = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  center,
  extraLarge,
  large,
  medium,
  small,
  width,
  uppercase,
  capitalize,
  accent,
  green,
  left,
  bold,
  normal,
  light,
  white,
  size,
  dark,
  inline,
  dark80,
  dark50,
  dark30,
  dark15,
  dark8,
  dark4,
  red,
  lineThrough,
  colorHover,
  middle,
  ...otherProps
}) => {
  const StylesObject = {} as Record<string, FlattenSimpleInterpolation>;

  if (uppercase)
    StylesObject.uppercase = css`
      text-transform: uppercase !important;
    `;

  if (inline)
    StylesObject.inline = css`
      display: inline;
    `;

  if (left)
    StylesObject.left = css`
      text-align: left;
    `;

  if (capitalize)
    StylesObject.capitalize = css`
      text-transform: capitalize !important;
    `;

  if (light)
    StylesObject.light = css`
      -webkit-text-fill-color: ${theme.color.dark50} !important;
      color: ${theme.color.dark50} !important;
      font-weight: lighter !important;
    `;

  if (center)
    StylesObject.center = css`
      text-align: center !important;
    `;

  if (middle)
    StylesObject.middle = css`
      vertical-align: 0.2rem;
    `;

  if (accent)
    StylesObject.accent = css`
      -webkit-text-fill-color: ${theme.color.accent} !important;
      color: ${theme.color.accent} !important;
    `;

  if (white)
    StylesObject.white = css`
      -webkit-text-fill-color: ${theme.color.white} !important;
      color: ${theme.color.white} !important;
    `;

  if (green)
    StylesObject.green = css`
      -webkit-text-fill-color: ${theme.color.green} !important;
      color: ${theme.color.green} !important;
    `;

  if (dark)
    StylesObject.dark = css`
      -webkit-text-fill-color: ${theme.color.dark} !important;
      color: ${theme.color.dark} !important;
    `;

  if (dark80)
    StylesObject.dark80 = css`
      -webkit-text-fill-color: ${theme.color.dark80} !important;
      color: ${theme.color.dark80} !important;
    `;

  if (dark50)
    StylesObject.dark50 = css`
      -webkit-text-fill-color: ${theme.color.dark50} !important;
      color: ${theme.color.dark50} !important;
    `;

  if (dark30)
    StylesObject.dark30 = css`
      -webkit-text-fill-color: ${theme.color.dark30} !important;
      color: ${theme.color.dark30} !important;
    `;

  if (dark15)
    StylesObject.dark15 = css`
      -webkit-text-fill-color: ${theme.color.dark15} !important;
      color: ${theme.color.dark15} !important;
    `;

  if (dark8)
    StylesObject.dark8 = css`
      -webkit-text-fill-color: ${theme.color.dark8} !important;
      color: ${theme.color.dark8} !important;
    `;

  if (dark4)
    StylesObject.dark4 = css`
      -webkit-text-fill-color: ${theme.color.dark4} !important;
      color: ${theme.color.dark4} !important;
    `;

  if (red)
    StylesObject.red = css`
      -webkit-text-fill-color: ${theme.color.red} !important;
      color: ${theme.color.red} !important;
    `;

  if (bold)
    StylesObject.bold = css`
      font-weight: bold !important;
    `;

  if (normal)
    StylesObject.normal = css`
      font-weight: normal !important;
    `;

  if (width)
    StylesObject.width = css`
      width: ${width} !important;
    `;

  if (size)
    StylesObject.size = css`
      font-size: ${size} !important;
    `;

  if (lineThrough)
    StylesObject.lineThrough = css`
      text-decoration: line-through;
    `;

  if (colorHover)
    StylesObject.colorHover = css`
      :hover {
        color: ${theme.color[colorHover]} !important ;
      }
    `;

  if (h1) return <H1 {...otherProps} styles={StylesObject} />;
  if (h2) return <H2 {...otherProps} styles={StylesObject} />;
  if (h3) return <H3 {...otherProps} styles={StylesObject} />;
  if (h4) return <H4 {...otherProps} styles={StylesObject} />;
  if (h5) return <H5 {...otherProps} styles={StylesObject} />;
  if (h6) return <H6 {...otherProps} styles={StylesObject} />;
  if (extraLarge) return <TextExtraLarge {...otherProps} styles={StylesObject} />;
  if (large) return <TextLarge {...otherProps} styles={StylesObject} />;
  if (small) return <TextSmall {...otherProps} styles={StylesObject} />;

  return <TextMedium {...otherProps} styles={StylesObject} />;
};

export default Text;
