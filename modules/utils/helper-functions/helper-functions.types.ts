import { Address, Location, User } from '@ilovemochi/enums';
import { IAddress, ICartItem, IGenericObject, IUser } from '@ilovemochi/types';
import DineroFactory from 'dinero.js';
import { NestDataObject } from 'react-hook-form';
import { FlattenSimpleInterpolation } from 'styled-components';

export type Capitalize = (x: string) => string;

export type TGetFirstWord = (arg: string) => string;

export type TMapIndexed = (fn: Function) => (arg: any) => any;

export type TToggleState = (fn: Function) => () => void;

export type IAddStyles = (
  props: IGenericObject<FlattenSimpleInterpolation> | undefined
) => FlattenSimpleInterpolation[];

export type TNoop = () => void;

export interface UserSignUpFormData {
  [Address.City]: IAddress[Address.City];
  [Address.Country]: IAddress[Address.Country];
  [Address.Zip]: IAddress[Address.Zip];
  [Address.Street]: IAddress[Address.Street];
  [Address.Floor]?: IAddress[Address.Floor];
  [User.Name]: IUser[User.Name];
  [User.WhatsApp]?: IUser[User.WhatsApp];
  [User.Phone]: IUser[User.Phone];
  [User.Email]?: IUser[User.Email];
  [User.BirthDate]: IUser[User.BirthDate];
  [User.Password]: string;
  [User.PasswordConfirmation]: string;
}

export interface ObjectWithBirthDate extends IGenericObject<any> {
  [User.BirthDate]: Date;
}

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

export type IsString = (x: any) => boolean;

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

export interface MapLocationData {
  [Location.Lat]: number;
  [Location.Lng]: number;
  [Address.Zip]: string;
  [Address.Country]: string;
  [Address.Street]: string;
  [Address.City]: string;
}

export type ConvertDineroToObject = (data: ICartItem) => ICartItem<DineroFactory.DineroObject>;

export type ConvertObjectToDinero = (
  data: ReadonlyArray<ICartItem<DineroFactory.DineroObject>>
) => ReadonlyArray<ICartItem>;

interface GetReactHookFormErrorData {
  name: string;
  errors: NestDataObject<Record<string, unknown>>;
}

export type GetReactHookFormError = (args: GetReactHookFormErrorData) => string | undefined;
