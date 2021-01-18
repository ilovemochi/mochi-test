import R from 'ramda';
import { createElement as createEl } from 'react';
import { css, FlattenSimpleInterpolation } from 'styled-components';

import { GeocoderResult } from '../../typescript';
import {
  GetReactHookFormError,
  IAddStyles,
  LoadScript,
  MediaQueryMap,
  MediaQueryMapValues,
  TIsNotNil,
  TNoop,
  ToUpperCase,
  TToggleState,
} from './helper-functions.types';

export const Breakpoints = {
  forPhoneOnly: 599,
  forTabletPortraitUp: 600,
  forTabletLandscapeUp: 900,
  forDesktopUp: 1200,
  forBigDesktopUp: 1800,
};

export const toggleState: TToggleState = fn => () => fn((prevState: boolean) => !prevState);

export const addStyles: IAddStyles = props => {
  const styles = css`` as Array<FlattenSimpleInterpolation>;
  if (props) Object.values<FlattenSimpleInterpolation>(props).forEach(x => styles.push(x));
  return styles;
};

export const noop: TNoop = () => {};

export const toUpperCase: ToUpperCase = R.invoker(0, 'toUpperCase');

export const isNotNil: TIsNotNil = R.compose(R.not, R.isNil);

export const getPastYear = (pastYears: number) => {
  const today = new Date();
  return new Date(today.setUTCFullYear(today.getUTCFullYear() - pastYears));
};

export const formatMoney = R.invoker(1, 'toFormat')('$0,0.00');

const respondTo = (mediaQuery: 'max-' | 'min-') =>
  Object.keys(Breakpoints).reduce((accumulator, label) => {
    const emSize = Breakpoints[label as keyof typeof Breakpoints] / 16;
    accumulator[label] = content => css`
      @media (${mediaQuery}width: ${emSize}em) {
        ${content};
      }
    `;
    return accumulator;
  }, {} as Record<string, MediaQueryMapValues>);

export const maxWidth = respondTo('max-') as MediaQueryMap;
export const minWidth = respondTo('min-') as MediaQueryMap;

// Props -> Component -> Element
const createElement = R.curryN(2, createEl);

// mapProps :: (a -> a) -> Component -> Component
// eslint-disable-next-line react-hooks/rules-of-hooks
export const mapProps = R.flip(R.useWith(R.o, [createElement, R.identity]));

export const showNothing = R.always(null);

export const flippedMap = R.flip(R.map);

export const isBoolean = R.is(Boolean);

export const loadScript: LoadScript = ({ id, src, callback = noop, async = false }) => {
  const existingScript = document.getElementById(id);

  if (!existingScript) {
    const script = document.createElement('script');
    script.src = src;
    script.id = id;
    script.async = async;
    document.body.appendChild(script);

    script.onload = callback;
    script.onerror = x => {
      throw new URIError(`The script ${R.pathOr('', ['target', 'scr'])(x)} didn't load correctly.`);
    };
  }

  if (existingScript && callback) callback();
};

export const removeScript = (id: string) => {
  const element = document.getElementById(id);

  // eslint-disable-next-line no-unused-expressions
  if (element) element.parentNode?.removeChild(element);
};

export const getFormattedAddress = R.propOr('', 'formatted_address');

export const pathLat = R.pathOr(R.always(null), ['geometry', 'location', 'lat']);

export const pathLng = R.pathOr(R.always(null), ['geometry', 'location', 'lng']);

export const formatGeoCodeResult = (result: GeocoderResult) => {
  const getLat = pathLat(result);
  const getLng = pathLng(result);
  return {
    street: getFormattedAddress(result) as string,
    lat: getLat(),
    lng: getLng(),
  };
};

export const getStreetFromPlaceObject = R.compose(
  R.ifElse(R.has('lat'), R.prop('street'), R.always('')),
  formatGeoCodeResult
);

export function hasDuplicates(array: Array<string>): boolean {
  const valuesSoFar = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const element of array) {
    if (element in valuesSoFar) {
      return true;
    }
    valuesSoFar[element] = true;
  }
  return false;
}

export const toInt = R.curryN(2, (radix: number, x: string) => parseInt(x, radix));

export const getReactHookFormError: GetReactHookFormError = ({ name, errors }) =>
  R.path([name, 'message'], errors);

export const enableScrolling = () => {
  if (process.browser) {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => window.scrollTo(x, y);
  }
};
