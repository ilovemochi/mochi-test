import { Theme } from '@design-system';
import { ButtonHTMLAttributes } from 'react';
import { LayoutProps, SpaceProps } from 'styled-system';

type ButtonVariant = keyof Theme['buttons'];

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    SpaceProps,
    LayoutProps {
  variant: ButtonVariant;
}
