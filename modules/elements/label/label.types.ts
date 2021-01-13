// eslint-disable-next-line import/no-unresolved
import { Args } from '@storybook/react/types-6-0';

export interface LabelProps extends Args {
  label: string;
  center?: boolean;
  required?: boolean;
  labelLess?: boolean;
}
