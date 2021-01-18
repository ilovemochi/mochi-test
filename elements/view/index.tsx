import { FC, HTMLAttributes, ReactNode, ReactText } from 'react';
import { css, FlattenSimpleInterpolation } from 'styled-components';

import { IFlexTypes } from '../../styles/styles.types';
import { handleMargin, handlePadding } from '../helpers';
import { Div } from './view.styles';

export interface Props {
  flex?: boolean | number | string;
  height?: string;
  relative?: boolean;
  minWidth?: string;
  minHeight?: string;
  row?: boolean;
  column?: boolean;
  center?: boolean;
  middle?: boolean;
  direction?: IFlexTypes['direction'];
  width?: string;
  flexWrap?: IFlexTypes['flexWrap'];
  justifyContent?: IFlexTypes['justifyContent'];
  alignItems?: IFlexTypes['alignItems'];
  padding?: ReactText[];
  margin?: ReactText[];
  children: ReactNode;
}

const View: FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  flex,
  justifyContent,
  alignItems,
  relative,
  minHeight,
  height,
  minWidth,
  width,
  column,
  row,
  middle,
  center,
  padding,
  margin,
  flexWrap,
  direction,
  ...otherProps
}) => {
  const StylesObject = {} as Record<string, FlattenSimpleInterpolation>;

  if (minHeight)
    StylesObject.minHeight = css`
      min-height: ${minHeight} !important;
    `;

  if (justifyContent)
    StylesObject.justifyContent = css`
      justify-content: ${justifyContent} !important;
    `;

  if (alignItems)
    StylesObject.alignItems = css`
      align-items: ${alignItems} !important;
    `;

  if (height)
    StylesObject.height = css`
      height: ${height} !important;
    `;

  if (minWidth)
    StylesObject.minWidth = css`
      min-width: ${minWidth} !important;
    `;

  if (width)
    StylesObject.width = css`
      width: ${width} !important;
    `;

  if (flex)
    StylesObject.flex = css`
      display: flex;
    `;

  if (typeof flex === 'number' || typeof flex === 'string')
    StylesObject.flex = css`
      display: flex;
      flex: ${flex};
    `;

  if (column)
    StylesObject.column = css`
      flex-direction: column !important;
    `;

  if (row)
    StylesObject.row = css`
      flex-direction: row !important;
    `;

  if (center)
    StylesObject.center = css`
      justify-content: center !important;
    `;

  if (middle)
    StylesObject.middle = css`
      align-items: center !important;
    `;

  if (flexWrap)
    StylesObject.flexWrap = css`
      flex-wrap: ${flexWrap} !important;
    `;

  if (direction)
    StylesObject.direction = css`
      flex-direction: ${direction} !important;
    `;

  if (padding) StylesObject.padding = handlePadding(padding) as FlattenSimpleInterpolation;

  if (margin) StylesObject.margin = handleMargin(margin) as FlattenSimpleInterpolation;

  if (relative)
    StylesObject.relative = css`
      position: relative;
    `;

  return <Div styles={StylesObject} {...otherProps} />;
};

export default View;
