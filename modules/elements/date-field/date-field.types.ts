import { Theme } from '@design-system';
import { FormField } from '@typescript/form';

export interface DateFieldProps extends Omit<FormField, 'errors'> {
  autofocus?: boolean;
  labelLess?: boolean;
  name: string;
  label: string;
  width?: string;
  required?: boolean;
  defaultValues?: string;
  variant?: keyof Theme['fieldWrappers'];
}
