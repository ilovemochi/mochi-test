import { FC } from 'react';

import { useI18n } from '../../hooks';
import Label from '../label';
import View from '../view';
import SelectField from './select-field.styles';
import { SelectFieldProps } from './select-field.types';

const SelectFieldComponent: FC<SelectFieldProps> = ({
  label,
  register,
  options,
  required,
  labelLess,
  noPadding,
  defaultValue = '',
  defaultOptionDescription,
  center,
  width,
  value,
  noBorder,
  ...otherProps
}) => {
  const { t } = useI18n();

  const defaultDescription = t(`common.options.${otherProps.name}.default`);

  return (
    <View my="L" width={width || '100%'} minWidth="25rem" position="relative">
      <Label label={label} labelLess={labelLess} center={center} required={required} />
      <SelectField
        data-testid="select"
        width="100%"
        center={center ? 'center' : 'inherit'}
        variant={noBorder ? 'enhanced' : 'normal'}
        padding={noPadding ? '0' : '0.5rem'}
        required={required}
        defaultValue={defaultValue}
        value={value}
        ref={register}
        {...otherProps}
      >
        <option value={defaultValue} disabled>
          {defaultDescription}
        </option>
        {options.map(option => (
          <option key={option} value={option}>
            {t(`common.options.${otherProps.name}.${option}`)}
          </option>
        ))}
      </SelectField>
    </View>
  );
};

export default SelectFieldComponent;

export * from './select-field.types';
