import { IGenericObject } from '@ilovemochi/types';
import { FC, HTMLAttributes } from 'react';
import { css, FlattenSimpleInterpolation } from 'styled-components';

import { theme } from '../../styles/theme';
import { Divider } from './divider.styles';

interface Props {
  full?: boolean;
  margin?: number;
  horizontal?: boolean;
  vertical?: boolean;
  dark15?: boolean;
  accent?: boolean;
  white?: boolean;
  center?: boolean;
  height?: string;
  width?: string;
}

const DividerComponent: FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  full,
  margin,
  vertical,
  horizontal,
  height,
  white,
  width,
  accent,
  dark15,
  center,
  ...otherProps
}) => {
  // eslint-disable-next-line no-param-reassign
  if (!horizontal && !vertical) horizontal = true;
  // eslint-disable-next-line no-param-reassign
  if (!dark15 && !accent) dark15 = true;

  const StylesObject = {} as IGenericObject<FlattenSimpleInterpolation>;

  if (horizontal)
    StylesObject.horizontal = css`
      width: 80% !important;
      height: 0.1rem !important;
    `;

  if (vertical && height)
    StylesObject.verticalHeight = css`
      height: ${height} !important;
      width: 0.1rem !important;
    `;

  if (horizontal && center)
    StylesObject.horizontalCenter = css`
      margin: 0 auto !important;
    `;

  if (vertical && center)
    StylesObject.verticalCenter = css`
      margin: auto 0 !important;
    `;

  if (vertical && !height)
    StylesObject['vertical!Height'] = css`
      width: 0.1rem !important;
      min-height: 80%;
    `;

  if (horizontal && width)
    StylesObject['vertical!Height'] = css`
      width: ${width} !important;
    `;

  if (full && horizontal)
    StylesObject.fullHorizontal = css`
      min-width: 100% !important;
    `;

  if (full && vertical)
    StylesObject.fullVertical = css`
      min-height: 100% !important;
    `;

  if (margin && horizontal)
    StylesObject.marginHoriozontal = css`
      margin: ${margin}rem auto !important;
    `;

  if (margin && vertical)
    StylesObject.marginVertical = css`
      margin: auto ${margin}rem !important;
    `;

  if (accent && horizontal)
    StylesObject.accentHorizontal = css`
      background-color: ${theme.color.accent} !important;
      border-top: 0.1rem solid ${theme.color.accent} !important;
    `;

  if (dark15 && horizontal)
    StylesObject.dark15Horizontal = css`
      background-color: ${theme.color.dark15} !important;
      border-top: 0.1rem solid ${theme.color.dark15} !important;
    `;

  if (accent && vertical)
    StylesObject.accentVertical = css`
      background-color: ${theme.color.accent} !important;
      border-right: 0.1rem solid ${theme.color.accent} !important;
    `;

  if (white && vertical)
    StylesObject.whiteVertical = css`
      background-color: ${theme.color.white} !important;
      border-right: 0.1rem solid ${theme.color.white} !important;
    `;

  if (dark15 && vertical)
    StylesObject.dark15Vertical = css`
      background-color: ${theme.color.dark15} !important;
      border-right: 0.1rem solid ${theme.color.dark15} !important;
    `;

  return <Divider styles={StylesObject} {...otherProps} />;
};

export default DividerComponent;
