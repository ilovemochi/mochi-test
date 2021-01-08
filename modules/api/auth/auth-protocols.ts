import { User } from '@ilovemochi/enums';
import { AccessTokenResponse, ClientAPIResponse, IUser } from '@ilovemochi/types';

export interface LoginPayload {
  [User.Email]: string;
  [User.Password]: string;
}

type UserAccessTokenResponse = AccessTokenResponse<IUser>;

export type RefreshAuthJson = AccessTokenResponse<IUser>;

export type TLogin = (payload: LoginPayload) => Promise<ClientAPIResponse<UserAccessTokenResponse>>;

export interface GoogleSignInPayload {
  idToken: string;
}

export type TGoogleSignIn = (
  payload: GoogleSignInPayload
) => Promise<ClientAPIResponse<UserAccessTokenResponse>>;

export interface PostRecoverPasswordPayload {
  [User.Email]: string;
}

export interface MessagedResponse {
  message: string;
}

export type TPostRecoverPassword = (
  payload: PostRecoverPasswordPayload
) => Promise<ClientAPIResponse<MessagedResponse>>;

export interface PostResetPasswordPayload {
  [User.Password]: string;
  token: string;
}

export type TPostResetPassword = (
  payload: PostResetPasswordPayload
) => Promise<ClientAPIResponse<MessagedResponse>>;

export type TGetResetPassword = (payload: string) => Promise<ClientAPIResponse<void>>;

export type TSignOut = () => Promise<ClientAPIResponse<MessagedResponse>>;

export interface SignUpPayload {
  [User.Email]: string;
  [User.Name]: string;
  [User.Password]: string;
  [User.PasswordConfirmation]: string;
}

export type TSignUp = (
  payload: SignUpPayload
) => Promise<ClientAPIResponse<UserAccessTokenResponse>>;

export interface TGetLocationCookiePayload {
  lat: string;
  lng: string;
}
export type TGetLocationCookie = (
  payload: TGetLocationCookiePayload
) => Promise<ClientAPIResponse<undefined>>;
