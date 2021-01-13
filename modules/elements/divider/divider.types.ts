import { HTMLAttributes } from 'react';
import { ColorProps, LayoutProps } from 'styled-system';

type DividerVariant = 'horizontal' | 'vertical';

type Family = LayoutProps & ColorProps & HTMLAttributes<HTMLDivElement>;

export interface DividerProps extends Family {
  variant: DividerVariant;
}
