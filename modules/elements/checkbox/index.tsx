import { not } from 'ramda';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import Text from '../text';
import { CheckboxLabel, StyledCheckbox } from './checkbox.styles';
import { CheckboxProps } from './checkout.types';

const Checkbox: FC<CheckboxProps> = ({
  active,
  disabled,
  children,
  onClick,
  textColor,
  color,
  label,
  ...args
}) => {
  const [isActive, setIsActive] = useState(!!active);

  const currentColor = disabled ? 'graySecondary' : color;

  const toggleState = () => {
    if (!disabled) {
      setIsActive(not);
      if (onClick) onClick();
    }
  };

  const id = v4();

  return (
    <CheckboxLabel aria-labelledby="checkbox-label" onClick={toggleState}>
      <StyledCheckbox
        role="checkbox"
        aria-checked={isActive ? 'true' : 'false'}
        tabIndex={0}
        aria-hidden="false"
        aria-labelledby={id}
        bg={isActive ? currentColor : 'transparent'}
        color={currentColor as string}
        disabled={disabled}
        {...args}
      />
      <Text id={id} variant="inline" color={textColor || 'currentColor'}>
        {label}
      </Text>
    </CheckboxLabel>
  );
};

export default Checkbox;

export * from './checkout.types';
