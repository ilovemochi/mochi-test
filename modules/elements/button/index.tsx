import { FC } from 'react';

import StyledButton from './button.styles';
import { ButtonProps } from './button.types';

const Button: FC<ButtonProps> = ({ type, disabled, ...args }) => (
  <StyledButton type={type || 'button'} disabled={disabled} aria-disabled={disabled} {...args} />
);

export default Button;

export * from './button.types';
