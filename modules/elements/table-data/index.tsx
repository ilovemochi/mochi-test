import styled from 'styled-components';
import { color, space, system, typography } from 'styled-system';

import { body } from '../../design-system/themes/texts';
import { TdProps } from './table-data.types';

const TD = styled('td')<TdProps>(body, color, typography, space, system({ textTransform: true }));

export default TD;
