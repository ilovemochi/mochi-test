import { NextComponentType, NextPageContext } from 'next';
import React from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

import { Props as TextFieldProps } from '../../elements/text-field/types';
import { FormField } from './form';

// App

export interface InitialProps {
  Component: NextComponentType;
  ctx: NextPageContext;
}

export interface AppProps {
  locale: string;
  lngDict: Record<string, string>;
}

export interface MyDocumentProps {
  lang: string;
}

// Events

export type IOnChange<T> = (event: React.ChangeEvent<T>) => void;

// HTML Definitions

export type FontSize = string;

// Functions

export type IStyles = {
  styles?: Record<string, FlattenSimpleInterpolation>;
  children?: React.ReactNode;
};

export type ReactFormTextFieldProps = FormField & TextFieldProps;

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
