import { Address, User } from '@ilovemochi/enums';
import { getPastYear } from '@utils/helper-functions';
import * as yup from 'yup';

import ErrorMessage from './error-message';

export const NameValidationObj = {
  [User.Name]: yup
    .string()
    .label(User.Name)
    .required(ErrorMessage.required)
    .trim()
    .min(1, ErrorMessage.min)
    .max(40, ErrorMessage.max)
    .typeError(ErrorMessage.type),
};

export const StreetValidationObj = {
  [Address.Street]: yup
    .string()
    .label(Address.Street)
    .required(ErrorMessage.required)
    .min(5, ErrorMessage.min)
    .trim()
    .typeError(ErrorMessage.type),
};

export const EmailValidationObj = {
  [User.Email]: yup
    .string()
    .email(User.Email)
    .label(ErrorMessage.label)
    .required(ErrorMessage.required)
    .trim()
    .typeError(ErrorMessage.type),
};

export const PasswordValidationObj = {
  [User.Password]: yup
    .string()
    .label(User.Password)
    .required(ErrorMessage.required)
    .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, {
      message: ErrorMessage.match,
    })
    .typeError(ErrorMessage.type)
    .trim(),
};

export const ConfirmPasswordValidationObj = {
  [User.PasswordConfirmation]: yup
    .string()
    .label(User.PasswordConfirmation)
    .required(ErrorMessage.required)
    .test(ErrorMessage.match, ErrorMessage.match, function passwordsMatch(this, value) {
      if (this) return this.parent?.password === value;
      return false;
    })
    .trim()
    .typeError(ErrorMessage.type),
};

export const PhoneNumberValidationObj = {
  [User.Phone]: yup
    .string()
    .required(ErrorMessage.required)
    .label(User.Phone)
    .trim()
    .typeError(ErrorMessage.type),
};

export const ZipCodeValidationObj = {
  [Address.Zip]: yup
    .string()
    .required(ErrorMessage.required)
    .label(Address.Zip)
    .trim()
    .typeError(ErrorMessage.type),
};

export const CityValidationObj = {
  [Address.City]: yup
    .string()
    .label(Address.City)
    .required(ErrorMessage.required)
    .typeError(ErrorMessage.type),
};

export const CountryValidationObj = {
  [Address.Country]: yup
    .string()
    .required(ErrorMessage.required)
    .label(Address.Country)
    .trim()
    .typeError(ErrorMessage.type),
};

export const GenderValidationObj = {
  [User.Gender]: yup
    .string()
    .matches(/(male|female|other)/, ErrorMessage.match)
    .label(User.Gender)
    .trim()
    .typeError(ErrorMessage.type),
};

export const BirthDateValidationObj = {
  [User.BirthDate]: yup
    .date()
    .label(User.BirthDate)
    .max(getPastYear(12), ErrorMessage.max)
    .min(getPastYear(100), ErrorMessage.min)
    .required(ErrorMessage.required)
    .typeError(ErrorMessage.type),
};
