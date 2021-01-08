import { maxWidth } from '@utils/helper-functions';
import styled, { css } from 'styled-components';

import { Text as TextView, View } from '../../../elements';
import { theme } from '../../../styles/theme';

export const Container = styled(View)`
  width: 100%;
  height: 50rem;
  background-color: ${theme.color.darkAccent};
  background-image: url('/images/landing-page/food_bottom.png');

  ${maxWidth.forTabletLandscapeUp(css`
    background-image: none;
  `)}
`;

export const Text = styled(TextView)`
  ${maxWidth.forTabletLandscapeUp(css`
    width: 90% !important;
  `)}
`;

export const AddressWrapper = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
