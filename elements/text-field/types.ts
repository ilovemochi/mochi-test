import { ChangeEvent } from 'react';

export type TInputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'email'
  | 'password'
  | 'file'
  | 'datetime-local'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export interface Props {
  label: string;
  type?: TInputType;
  isPasswordField?: boolean;
  required?: boolean;
  readonly?: boolean;
  name: string;
  disabled?: boolean;
  value?: string;
  width?: string;
  center?: boolean;
  labelLess?: boolean;
  noPadding?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  register?: (data: unknown) => void;
  noBorder?: boolean;
  autoComplete?: string;
  autofocus?: boolean;
  autofocusOnEnable?: boolean;
}
