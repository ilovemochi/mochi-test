import { useI18n } from '@hooks';
import { noop } from '@utils/helper-functions';
import { FC, useEffect, useRef, useState } from 'react';
import { FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';

import Label from '../label';
import { InputField, InputWrapper } from './text-field.styles';
import { TextFieldProps } from './text-field.types';

const TextField: FC<TextFieldProps> = ({
  label,
  labelLess,
  noPadding,
  onChange = noop,
  register,
  required,
  type,
  width,
  center,
  noBorder,
  padding,
  disabled,
  autofocus,
  autofocusOnEnable = false,
  ...otherProps
}) => {
  const { t } = useI18n();
  const isPasswordField = type === 'password';
  const [hideText, setHideText] = useState(true);
  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    if (autofocusOnEnable && inputRef.current && !disabled) inputRef.current.focus();
  }, [disabled, autofocusOnEnable]);

  useEffect(() => {
    if (!autofocusOnEnable && autofocus && inputRef.current) inputRef.current.focus();
  }, [autofocus, autofocusOnEnable]);

  const toggleHideText = () => setHideText(prevState => !prevState);

  // eslint-disable-next-line consistent-return
  const calculatedPadding = (() => {
    if (isPasswordField) return '3rem';
    if (noPadding) return '0';
  })();

  return (
    <InputWrapper my="L" width={width || '100%'} minWidth="25rem" position="relative" p={padding}>
      <Label label={label} labelLess={labelLess} center={center} required={required} />
      {isPasswordField && <FaLock className="lock" role="img" aria-label={label} />}
      <InputField
        center={center ? 'center' : 'inherit'}
        variant={noBorder ? 'enhanced' : 'normal'}
        padding={calculatedPadding}
        ref={event => {
          if (register) register(event);
          inputRef.current = event;
        }}
        type={type === 'password' && hideText ? 'password' : 'text' || type}
        required={required}
        disabled={disabled}
        onChange={onChange}
        {...otherProps}
      />

      {isPasswordField && (
        <>
          {hideText ? (
            <FaEye
              className="eye"
              onClick={toggleHideText}
              role="button"
              aria-label={t('common.ariaLabel.showPassword')}
            />
          ) : (
            <FaEyeSlash
              className="eye"
              onClick={toggleHideText}
              role="button"
              aria-label={t('common.ariaLabel.hidePassword')}
            />
          )}
        </>
      )}
    </InputWrapper>
  );
};

export default TextField;

export * from './text-field.types';
