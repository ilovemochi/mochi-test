import styled from 'styled-components';
import { color, space, system, typography } from 'styled-system';

import { bold } from '../../design-system/themes/texts';
import { ThProps } from './table-heading.types';

const TH = styled('td')<ThProps>(bold, color, typography, space, system({ textTransform: true }));

export default TH;
