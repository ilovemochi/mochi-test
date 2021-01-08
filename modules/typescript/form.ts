import { NestDataObject } from 'react-hook-form';

export interface FormField {
  register?: (data: unknown) => void;
  errors: NestDataObject<Record<string, any>>;
  disabled?: boolean;
  labelLess?: boolean;
  value?: string;
  noBorder?: boolean;
  center?: boolean;
  noPadding?: boolean;
  autofocus?: boolean;
  autofocusOnEnable?: boolean;
  defaultValues?: any;
  unregister?: (name: string) => void;
  setValue?: (name: string, value: unknown) => void;
  enhancedStyle?: boolean;
}
