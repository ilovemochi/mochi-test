import { NestDataObject } from 'react-hook-form';

export interface SearchLocationInputProps {
  handleChange: (value: any) => void;
  errors: NestDataObject<Record<string, any>>;
  labelLess?: boolean;
  disabled?: boolean;
  noPadding?: boolean;
  noBorder?: boolean;
  defaultValue?: string;
  autofocus?: boolean;
  autofocusOnEnable?: boolean;
  predictionsContainerWidth?: string;
  predictionsContainerPositionX?: string;
  placeholder?: string;
}
