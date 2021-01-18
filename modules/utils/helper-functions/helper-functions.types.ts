import { NestDataObject } from 'react-hook-form';
import { FlattenSimpleInterpolation } from 'styled-components';

export type TToggleState = (fn: Function) => () => void;

export type IAddStyles = (
  props: Record<string, FlattenSimpleInterpolation> | undefined
) => FlattenSimpleInterpolation[];

export type TNoop = () => void;

export type ToUpperCase = (string: string) => string;

export type TIsNotNil = (arg: any) => boolean;

export type TIsNew = (dateString: string) => boolean;

export type MediaQueryMapValues = (x: any) => any;

export type MediaQueryMap = {
  forPhoneOnly: MediaQueryMapValues;
  forTabletPortraitUp: MediaQueryMapValues;
  forTabletLandscapeUp: MediaQueryMapValues;
  forDesktopUp: MediaQueryMapValues;
  forBigDesktopUp: MediaQueryMapValues;
};

export interface GetCookieValueData {
  cookieName: string;
  cookie: string;
}

export type GetCookieValue = (data: GetCookieValueData) => string | undefined;

export interface LoadScriptData {
  src: string;
  callback: (ev?: Event) => void;
  id: string;
  async?: boolean;
}

export type LoadScript = (data: LoadScriptData) => void;

interface GetReactHookFormErrorData {
  name: string;
  errors: NestDataObject<Record<string, unknown>>;
}

export type GetReactHookFormError = (args: GetReactHookFormErrorData) => string | undefined;
