import { maxWidth } from '@utils/helper-functions';
import styled, { css } from 'styled-components';

import { Text as TextView, View } from '../../elements';
import { theme } from '../../styles/theme';

export const LandingContentWrapper = styled(View)`
  width: 70%;
  margin: 0 auto;

  ${maxWidth.forTabletPortraitUp(css`
    width: 92%;
  `)}
`;

export const Text = styled(TextView)`
  ${maxWidth.forTabletPortraitUp(css`
    width: 95%;
    text-align: center;
  `)}
`;

export const Titles = styled(TextView)`
  ${maxWidth.forTabletPortraitUp(css`
    width: 100%;
    font-size: ${theme.font.h2} !important;
    line-height: 5rem;
    text-align: center;
  `)}
`;
