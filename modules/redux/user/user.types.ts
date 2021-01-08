import { TGetLocationCookiePayload } from '@api/auth/auth-protocols';
import { User as UserConstant } from '@ilovemochi/enums';
import { I18nError, ILocation, IUser, IUserGender } from '@ilovemochi/types';
import { DeepPartial } from '@typescript';

import { ClearAllErrorsReturn } from '../error/error.types';
import { HydrateAction } from '../redux.types';
import { AuthModalEnum, UserActionTypes } from './user.enum';

export interface ISignUpUser {
  [UserConstant.Name]: IUser[UserConstant.Name];
  [UserConstant.BirthDate]: IUser[UserConstant.BirthDate];
  [UserConstant.Gender]: '' | IUser[UserConstant.Gender];
  [UserConstant.Email]: IUser[UserConstant.Email];
  [UserConstant.Phone]: IUser[UserConstant.Phone];
  [UserConstant.WhatsApp]: IUser[UserConstant.WhatsApp];
  [UserConstant.Location]: IUser[UserConstant.Location];
  [UserConstant.Password]: string;
  [UserConstant.PasswordConfirmation]: string;
  path?: string;
}

export interface UserAdditionalInformation {
  [UserConstant.Name]: IUser[UserConstant.Name];
  [UserConstant.WhatsApp]?: IUser[UserConstant.WhatsApp];
  [UserConstant.Phone]: IUser[UserConstant.Phone];
  [UserConstant.Email]?: IUser[UserConstant.Email];
  [UserConstant.BirthDate]: Date;
  [UserConstant.Gender]?: IUserGender | string;
  [UserConstant.Location]: ILocation;
  path?: string;
}

export interface IEmailAndPassword {
  [UserConstant.Email]: IUser['email'];
  [UserConstant.Password]: string;
  path?: string;
}

export interface IncompleteUser {
  email: IUser['email'];
  id: IUser['id'];
}

export interface GoogleUser {
  idToken: string;
  email: IUser['email'];
  name: IUser['name'];
  path?: string;
}

export interface ResetPasswordPayload {
  password: string;
  token: string;
}

// ***** Interfaces for the actions Start *****

export interface EmailSignInStartReturn {
  type: typeof UserActionTypes.EMAIL_SIGN_IN_START;
  payload: IEmailAndPassword;
}

export interface EmailSignInStart {
  (data: IEmailAndPassword): EmailSignInStartReturn;
}

export interface SignInSuccessReturn {
  type: typeof UserActionTypes.SIGN_IN_SUCCESS;
  payload: IUser;
}

export interface SignInSuccess {
  (user: IUser): SignInSuccessReturn;
}

export interface SignUpStartReturn {
  type: typeof UserActionTypes.SIGN_UP_START;
  payload: ISignUpUser;
}

export interface SignUpStart {
  (payload: ISignUpUser): SignUpStartReturn;
}

export interface SignUpSuccessReturn {
  type: typeof UserActionTypes.SIGN_UP_SUCCESS;
  payload: IUser;
}

export interface SignUpSuccess {
  (user: IUser): SignUpSuccessReturn;
}

export interface SignOutStartReturn {
  type: typeof UserActionTypes.SIGN_OUT_START;
}

export interface SignOutStart {
  (): SignOutStartReturn;
}

export interface SignOutSuccessReturn {
  type: typeof UserActionTypes.SIGN_OUT_SUCCESS;
}

export interface SignOutSuccess {
  (): SignOutSuccessReturn;
}

export interface GetResetPasswordEmailStartReturn {
  type: typeof UserActionTypes.GET_RESET_PASSWORD_EMAIL_START;
  payload: string;
}

export interface GetResetPasswordEmailStart {
  (email: string): GetResetPasswordEmailStartReturn;
}

interface GetResetPasswordEmailSuccessReturn {
  type: typeof UserActionTypes.GET_RESET_PASSWORD_EMAIL_SUCCESS;
}

export interface GetResetPasswordEmailSuccess {
  (): GetResetPasswordEmailSuccessReturn;
}

export interface ResetPasswordStartReturn {
  type: typeof UserActionTypes.RESET_PASSWORD_START;
  payload: ResetPasswordPayload;
}

export interface ResetPasswordStart {
  (payload: ResetPasswordPayload): ResetPasswordStartReturn;
}

export interface ResetPasswordSuccessReturn {
  type: typeof UserActionTypes.RESET_PASSWORD_SUCCESS;
}

export interface ResetPasswordSuccess {
  (): ResetPasswordSuccessReturn;
}

export interface OnboardUserStartStartReturn {
  type: typeof UserActionTypes.ONBOARD_USER_START;
  payload: UserAdditionalInformation;
}

export interface OnboardUserStart {
  (userAdditionalInformation: UserAdditionalInformation): OnboardUserStartStartReturn;
}

export interface LoadInitialUserDataReturn {
  type: typeof UserActionTypes.LOAD_INITIAL_USER_DATA;
  payload: IUser | null;
}

export interface LoadInitialUserData {
  (user: IUser | null): LoadInitialUserDataReturn;
}

export interface GoogleSignInStartReturn {
  type: typeof UserActionTypes.GOOGLE_SIGN_IN_START;
  payload: GoogleUser;
}

export interface GoogleSignInStart {
  (googleUser: GoogleUser): GoogleSignInStartReturn;
}

export interface GoogleSignInSuccessReturn {
  type: typeof UserActionTypes.GOOGLE_SIGN_IN_SUCCESS;
  payload: IncompleteUser;
}

export interface GoogleSignInSuccess {
  (user: IncompleteUser): GoogleSignInSuccessReturn;
}

export interface SetUserOperationFailureReturn {
  type: typeof UserActionTypes.SET_USER_OPERATION_ERROR;
  payload: I18nError;
}

export interface SetUserOperationFailure {
  (error: I18nError): SetUserOperationFailureReturn;
}

export interface UpdateUserStartReturn {
  type: typeof UserActionTypes.UPDATE_USER_START;
  payload: DeepPartial<IUser>;
}

export interface UpdateUserStart {
  (user: DeepPartial<IUser>): UpdateUserStartReturn;
}

export interface UpdateUserSuccessReturn {
  type: typeof UserActionTypes.UPDATE_USER_SUCCESS;
  payload: IUser;
}

export interface UpdateUserSuccess {
  (user: IUser): UpdateUserSuccessReturn;
}

export interface SetHasLocationReturn {
  type: typeof UserActionTypes.SET_HAS_LOCATION;
  payload: boolean;
}

export interface SetHasLocation {
  (payload: boolean): SetHasLocationReturn;
}

export interface SetAuthModalReturn {
  type: typeof UserActionTypes.SET_AUTH_MODAL;
  payload: AuthModalEnum | null;
}

export interface SetAuthModal {
  (authModal: AuthModalEnum | null): SetAuthModalReturn;
}

export interface SetLocationCookieStartReturn {
  type: typeof UserActionTypes.SET_LOCATION_COOKIE_START;
  payload: TGetLocationCookiePayload;
}

export interface SetLocationCookieStart {
  (payload: TGetLocationCookiePayload): SetLocationCookieStartReturn;
}

export interface SetAccessTokenReturn {
  type: typeof UserActionTypes.SET_ACCESS_TOKEN;
  payload: string;
}

export interface SetAccessToken {
  (payload: string): SetAccessTokenReturn;
}

// ***** Interfaces for the actions End *****

export type UserActions =
  | EmailSignInStartReturn
  | SetAuthModalReturn
  | SignInSuccessReturn
  | SignUpStartReturn
  | SignUpSuccessReturn
  | SignOutStartReturn
  | SignOutSuccessReturn
  | GetResetPasswordEmailStartReturn
  | GetResetPasswordEmailSuccessReturn
  | ClearAllErrorsReturn
  | OnboardUserStartStartReturn
  | LoadInitialUserDataReturn
  | GoogleSignInStartReturn
  | GoogleSignInSuccessReturn
  | SetUserOperationFailureReturn
  | UpdateUserStartReturn
  | UpdateUserSuccessReturn
  | ResetPasswordStartReturn
  | ResetPasswordSuccessReturn
  | SetHasLocationReturn
  | SetLocationCookieStartReturn
  | SetAccessTokenReturn
  | HydrateAction;
