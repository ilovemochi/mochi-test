import { serverGet, serverPost } from '../utils';
import {
  TGetLocationCookie,
  TGetResetPassword,
  TGoogleSignIn,
  TLogin,
  TPostRecoverPassword,
  TPostResetPassword,
  TSignOut,
  TSignUp,
} from './auth-protocols';

export const Login: TLogin = payload => serverPost('user/login', payload);

export const PostRecoverPassword: TPostRecoverPassword = payload =>
  serverPost('user/recoverPassword', payload);

export const PostResetPassword: TPostResetPassword = ({ token, password }) =>
  serverPost(`user/resetPassword/${token}`, { password });

export const SignOut: TSignOut = () => serverGet('user/signOut');

export const SignUp: TSignUp = payload => serverPost('user/signUp', payload);

export const GetResetPassword: TGetResetPassword = (token: string) =>
  serverGet(`user/resetPassword/${token}`);

export const GetLocationCookie: TGetLocationCookie = payload =>
  serverGet(`user/location?lat=${payload.lat}&lng=${payload.lng}`);

export const GoogleSignIn: TGoogleSignIn = payload => serverPost('user/googleSignIn', payload);
