import styled from 'styled-components';

import StyledView from '../view';
import { ViewProps } from '../view/view.types';

const FlexView = styled(StyledView)<ViewProps>({ display: 'flex' });

export default FlexView;
