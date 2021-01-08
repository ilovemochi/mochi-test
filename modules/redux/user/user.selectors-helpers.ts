import { applySpec, pathOr } from 'ramda';

import { UserState } from '../state.types';
import { UserEnum } from './user.enum';
import { INITIAL_STATE } from './user.reducer';

export const getInUserData = pathOr<UserState[UserEnum.Data]>(INITIAL_STATE[UserEnum.Data], [
  UserEnum.User,
  UserEnum.Data,
]);

export const getInUserError = pathOr<UserState[UserEnum.Error]>(INITIAL_STATE[UserEnum.Error], [
  UserEnum.User,
  UserEnum.Error,
]);

export const getInUserLoading = pathOr<UserState[UserEnum.Loading]>(
  INITIAL_STATE[UserEnum.Loading],
  [UserEnum.User, UserEnum.Loading]
);

export const getInUserHasLocation = pathOr<UserState[UserEnum.Loading]>(
  INITIAL_STATE[UserEnum.HasLocation],
  [UserEnum.User, UserEnum.HasLocation]
);

export const getInUserAuthModal = pathOr<UserState[UserEnum.AuthModal]>(
  INITIAL_STATE[UserEnum.AuthModal],
  [UserEnum.User, UserEnum.AuthModal]
);

export const getInAccessToken = pathOr<UserState[UserEnum.AccessToken]>(
  INITIAL_STATE[UserEnum.AccessToken],
  [UserEnum.User, UserEnum.AccessToken]
);

export const getInUserDataAccessToken = applySpec({
  user: getInUserData,
  accessToken: getInAccessToken,
});
