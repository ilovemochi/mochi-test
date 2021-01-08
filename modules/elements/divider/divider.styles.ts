import { IStyles } from '@typescript';
import { addStyles } from '@utils/helper-functions';
import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Divider = styled.div<IStyles>`
  display: inline-block;
  border: 0;
  padding: 0;
  ${props => addStyles(props.styles)};
  z-index: 10;
`;
