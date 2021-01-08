import { FlexView } from '@elements';
import styled from 'styled-components';

// TODO: replace this image to an optimized in ouwer bucket
// eslint-disable-next-line import/prefer-default-export
export const HeaderContent = styled(FlexView)`
  background: linear-gradient(
      86.28deg,
      rgba(116, 92, 160, 0.3) 0%,
      rgba(116, 92, 160, 0.6) 58.08%,
      ${({ theme }) => theme.colors.accent} 100%
    ),
    url(https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)
      no-repeat center;
  background-size: cover;
`;
