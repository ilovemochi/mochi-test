import { FC } from 'react';

import { StyledDivider } from './divider.styles';
import { DividerProps } from './divider.types';

const Divider: FC<DividerProps> = args => <StyledDivider {...args} />;

export default Divider;

export * from './divider.types';
