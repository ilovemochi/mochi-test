import { noop } from '@utils/helper-functions';
import { equals } from 'ramda';
import { FC, HTMLAttributes, useEffect, useRef, useState } from 'react';
import { FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import { css, FlattenSimpleInterpolation } from 'styled-components';

import Label from '../label';
import { InputField, InputWrapper } from './text-field.styles';
import { Props } from './types';

const TextField: FC<Props & HTMLAttributes<HTMLInputElement>> = ({
  label,
  labelLess,
  isPasswordField,
  noPadding,
  onChange = noop,
  register,
  required,
  type,
  width,
  center,
  noBorder,
  disabled,
  autofocus,
  autofocusOnEnable = false,
  ...otherProps
}) => {
  const [hideText, setHideText] = useState(true);
  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    if (autofocusOnEnable && inputRef.current && !disabled) inputRef.current.focus();
  }, [disabled, autofocusOnEnable]);

  useEffect(() => {
    if (!autofocusOnEnable && autofocus && inputRef.current) inputRef.current.focus();
  }, [autofocus, autofocusOnEnable]);

  const toggleHideText = () => setHideText(prevState => !prevState);

  if (equals(type, 'password')) type = hideText ? 'password' : 'text';

  const StylesObject = {} as Record<string, FlattenSimpleInterpolation>;

  if (isPasswordField)
    StylesObject.isPassWordField = css`
      padding-left: 3rem !important;
      padding-right: 3rem !important;
    `;

  if (center)
    StylesObject.center = css`
      text-align: center;
    `;

  if (width)
    StylesObject.width = css`
      width: ${width};
    `;

  if (noBorder)
    StylesObject.noBorder = css`
      border: none;
      :focus {
        border: none;
      }
    `;

  if (noPadding)
    StylesObject.noPadding = css`
      padding-left: 0;
      padding-right: 0;
    `;

  return (
    <InputWrapper>
      <Label label={label} labelLess={!!labelLess} required={!!required} center={!!center} />
      {isPasswordField && <FaLock className="lock" />}
      <InputField
        ref={event => {
          if (register) register(event);
          inputRef.current = event;
        }}
        type={type}
        required={required}
        disabled={disabled}
        styles={StylesObject}
        onChange={onChange}
        {...otherProps}
      />

      {isPasswordField && (
        <>
          {hideText ? (
            <FaEye className="eye" onClick={toggleHideText} />
          ) : (
            <FaEyeSlash className="eye" onClick={toggleHideText} />
          )}
        </>
      )}
    </InputWrapper>
  );
};

export default TextField;
