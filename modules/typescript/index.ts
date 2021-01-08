import { Product, ProductStore } from '@ilovemochi/enums';
import {
  IGenericObject,
  IProductImage,
  IProductsCategory,
  IProductsContainer,
  IProductSize,
  IProductsSubCategory,
} from '@ilovemochi/types';
import { Currency } from 'dinero.js';
import { IncomingMessage } from 'http';
import { NextComponentType, NextPageContext } from 'next';
import React from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

import { Props as DateFieldProps } from '../../elements/date-field/date-field.types';
import { Props as SelectFieldProps } from '../../elements/select-field/select-field.types';
import { Props as TextFieldProps } from '../../elements/text-field/types';
import { FormField } from './form';

// App

export interface InitialProps {
  Component: NextComponentType;
  ctx: NextPageContext;
}

export interface MyAppRequest extends IncomingMessage {
  cookies: IGenericObject<string>;
}

export interface AppProps {
  locale: string;
  lngDict: Record<string, string>;
}

export interface MyDocumentProps {
  lang: string;
}

// Events

export type IOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

export type IOnChange<T> = (event: React.ChangeEvent<T>) => void;

// HTML Definitions

export type TButtonType = 'submit' | 'button' | 'reset';

export type FontSize = string;

export type TextAlign = 'center' | 'left' | 'right' | 'justify';

// Functions

export type IStyles = {
  styles?: IGenericObject<FlattenSimpleInterpolation>;
  children?: React.ReactNode;
};

export type TToPairs = (object: IGenericObject<any>) => ReadonlyArray<any>;

// Form

export interface FormFieldCustom extends FormField {
  handleChange: (value: any) => void;
}

export type ReactFormTextFieldProps = FormField & TextFieldProps;

export type ReactFormSelectFieldProps = FormField & SelectFieldProps;

export type ReactFormDateFieldProps = FormField & DateFieldProps;

export interface StoreProduct {
  [Product.Id]: string;
  [Product.FullName]: string;
  [Product.Name]: string;
  [Product.Container]: IProductsContainer;
  [Product.Category]: IProductsCategory;
  [Product.SubCategory]: IProductsSubCategory;
  [Product.Type]: string;
  [Product.Tags]: ReadonlyArray<string>;
  [Product.Image]: IProductImage;
  [Product.Size]: IProductSize;
  [Product.CreatedAt]: Date;
  [ProductStore.StoreId]: string;
  [ProductStore.Price]: number;
  [ProductStore.Currency]: Currency;
  [ProductStore.DiscountPrice]: number | null;
  [ProductStore.Available]: boolean;
}

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

// Google Maps

// eslint-disable-next-line no-undef
export type AutocompletePrediction = google.maps.places.AutocompletePrediction;

// eslint-disable-next-line no-undef
export type AutocompletionRequest = google.maps.places.AutocompletionRequest;

// eslint-disable-next-line no-undef
export type GeocoderResult = google.maps.GeocoderResult;

// eslint-disable-next-line no-undef
export type GeocoderRequest = google.maps.GeocoderRequest;

// eslint-disable-next-line no-undef
export type GoogleAuth = gapi.auth2.GoogleAuth;

// Tasks

export interface ProductTaskData {
  storeId: string;
  type: string;
  page: number;
  limit?: number;
}

export * from '@ilovemochi/types';
