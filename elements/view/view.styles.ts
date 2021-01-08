import styled from 'styled-components';

import { IStyles } from '../../modules/typescript';
import { addStyles } from '../../modules/utils/helper-functions';

// eslint-disable-next-line import/prefer-default-export
export const Div = styled.div<IStyles>`
  ${props => addStyles(props.styles)};
`;
