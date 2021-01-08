import { Theme } from '@design-system';
import { ChangeEvent, HTMLAttributes } from 'react';
import { CSSProperties } from 'styled-components';

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

export interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  type?: TInputType;
  required?: boolean;
  readonly?: boolean;
  name: string;
  disabled?: boolean;
  value?: string;
  width?: string;
  center?: boolean;
  labelLess?: boolean;
  padding?: string;
  noPadding?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  register?: (data: unknown) => void;
  noBorder?: boolean;
  autoComplete?: string;
  autofocus?: boolean;
  autofocusOnEnable?: boolean;
}

export interface InputProps {
  center: CSSProperties['textAlign'];
  padding: CSSProperties['padding'];
  variant: keyof Theme['fieldWrappers'];
}
