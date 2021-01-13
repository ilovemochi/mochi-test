import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { useI18n } from '@hooks';
import { format } from 'date-fns';
import { F } from 'ramda';
import { FC, memo, useEffect, useState } from 'react';
import { SingleDatePicker, SingleDatePickerShape } from 'react-dates';
import { AiFillCalendar } from 'react-icons/ai';

import Label from '../label';
import { CalendarIconWrapper, DateInputWrapper, FieldWrapper } from './date-field.styles';
import { DateFieldProps } from './date-field.types';

const DateField: FC<DateFieldProps> = memo(
  ({
    center,
    labelLess,
    label,
    required,
    defaultValues,
    unregister,
    setValue,
    register,
    name,
    width,
    disabled,
    variant = 'normal',
  }) => {
    const { t } = useI18n();
    const [date, setDate] = useState<SingleDatePickerShape['date']>(null);
    const [focused, setFocused] = useState(false);

    useEffect(() => {
      if (register) register({ name });
      return () => {
        if (unregister) unregister(name);
      };
    }, [name, register, unregister]);

    return (
      <DateInputWrapper variant={variant} w={width}>
        <Label
          htmlFor="mochi-date-picker"
          labelLess={!!labelLess}
          center={!!center}
          required={!!required}
          label={label}
        />
        <FieldWrapper variant={variant}>
          <CalendarIconWrapper
            role="button"
            aria-labelledby="calendar"
            variant={disabled ? 'disabled' : 'normal'}
            onClick={() => (disabled ? () => {} : setFocused(true))}
          >
            <AiFillCalendar
              role="img"
              aria-label={t('common.ariaLabel.calendar')}
              id="calendar"
              size={15}
            />
          </CalendarIconWrapper>
          <SingleDatePicker
            ariaLabel="date"
            disabled={disabled}
            date={date}
            onDateChange={newDate => {
              if (setValue) setValue(name, newDate?.toDate());
              setDate(newDate);
            }}
            focused={focused}
            onFocusChange={() => {}}
            id="mochi-date-picker"
            small
            block
            orientation="vertical"
            displayFormat={() => 'DD/MM/YYYY'}
            placeholder={
              defaultValues ? format(new Date(defaultValues), 'dd/MM/yyyy') : 'DD/MM/YYYY'
            }
            withFullScreenPortal
            onClose={() => setFocused(false)}
            isOutsideRange={F}
            required
            noBorder
          />
        </FieldWrapper>
      </DateInputWrapper>
    );
  }
);

export default DateField;

export * from './date-field.types';
