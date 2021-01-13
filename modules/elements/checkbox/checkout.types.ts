import { Theme } from '@design-system';
import { HTMLAttributes } from 'react';
import { ColorProps, LayoutProps } from 'styled-system';

type CheckboxVariant = keyof Theme['checkboxes'];

type Props = LayoutProps & ColorProps & HTMLAttributes<HTMLSpanElement>;

export interface CheckboxProps extends Props {
  variant: CheckboxVariant;
  textColor?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  label: string;
}
