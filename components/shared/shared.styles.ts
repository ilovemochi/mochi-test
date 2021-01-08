import { maxWidth } from '@utils/helper-functions';
import styled, { css } from 'styled-components';

import { View } from '../../elements';
import { FlexStyles } from '../../styles';
import { IMargin } from '../../styles/styles.types';

export const MenuOptionWrapper = styled.div`
  margin: 0 1rem;
  cursor: pointer;
`;

export const LinkContent = styled.div`
  cursor: pointer;
`;

export const Margin = styled.div<IMargin>`
  ${props => {
    if (props.margin)
      return css`
        margin: ${props.margin};
      `;

    if (props.verticalMargin)
      return css`
        margin: ${props.verticalMargin} 0;
      `;

    if (props.horizontalMargin)
      return css`
        margin: 0 ${props.horizontalMargin};
      `;

    if (props.marginTop)
      return css`
        margin-top: ${props.marginTop};
      `;

    if (props.marginRight)
      return css`
        margin-right: ${props.marginRight};
      `;

    if (props.marginBottom)
      return css`
        margin-bottom: ${props.marginBottom};
      `;

    if (props.marginLeft)
      return css`
        margin-left: ${props.marginLeft};
      `;

    return css`
      margin: ${props.margin};
    `;
  }}
`;

export const MobileWrapper = styled(View)`
  display: none;
  height: 5rem;
  ${maxWidth.forTabletLandscapeUp(css`
    display: flex;
    width: 100%;
  `)};
`;

export const ButtonsWrapper = styled.div`
  width: 50%;
  ${FlexStyles({ justifyContent: 'space-around', alignItems: 'center' })}

  ${maxWidth.forPhoneOnly(css`
    ${FlexStyles({ flexWrap: 'wrap' })}
  `)}
`;

export const MinimalButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;
