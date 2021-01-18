import styled from 'styled-components';

import { FlexStyles } from '../../../styles';

const ReactFormFieldWrapper = styled.div`
  position: relative;
  ${FlexStyles({ direction: 'column', alignItems: 'center', justifyContent: 'space-around' })}
  p {
    font-size: ${props => props.theme.font.normal};
    color: ${props => props.theme.color.red};
  }
`;

export default ReactFormFieldWrapper;
