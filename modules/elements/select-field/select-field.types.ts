import { ChangeEvent, HTMLAttributes } from 'react';

export interface SelectFieldProps extends HTMLAttributes<HTMLSelectElement> {
  label: string;
  required?: boolean;
  readonly?: boolean;
  noPadding?: boolean;
  name: string;
  disabled?: boolean;
  labelLess?: boolean;
  value?: string;
  center?: boolean;
  width?: string;
  defaultOptionDescription?: string;
  options: ReadonlyArray<string>;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  register?: (data: unknown) => void;
  noBorder?: boolean;
}
