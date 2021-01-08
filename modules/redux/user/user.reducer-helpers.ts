import { IUser } from '@ilovemochi/types';
import { userHasCoordinates } from '@utils/helper-functions';
import {
  always,
  applySpec,
  F,
  flip,
  identity,
  mergeLeft,
  mergeRight,
  o,
  pathOr,
  prop,
  useWith,
} from 'ramda';
import { AnyAction } from 'redux';

import { HydrateReducer, Reducer } from '../redux.types';
import { UserState } from '../state.types';
import { UserEnum } from './user.enum';

// eslint-disable-next-line react-hooks/rules-of-hooks
export const resetUserData: Reducer<UserState, AnyAction> = useWith(mergeRight, [
  identity,
  applySpec({
    [UserEnum.Data]: always(null),
    [UserEnum.Loading]: F,
    [UserEnum.Error]: F,
    [UserEnum.AuthModal]: always(null),
    [UserEnum.AccessToken]: always(null),
  }),
]);

// eslint-disable-next-line react-hooks/rules-of-hooks
export const setAccessTokenData: Reducer<UserState, AnyAction> = useWith(mergeRight, [
  identity,
  applySpec({
    [UserEnum.AccessToken]: prop('payload'),
  }),
]);

// eslint-disable-next-line react-hooks/rules-of-hooks
export const setUserData: Reducer<UserState, AnyAction> = useWith(mergeRight, [
  identity,
  applySpec<UserState>({
    [UserEnum.Data]: prop('payload'),
    [UserEnum.Loading]: F,
    [UserEnum.Error]: F,
    [UserEnum.AuthModal]: always(null),
    [UserEnum.HasLocation]: o(userHasCoordinates, prop<string, IUser>('payload')),
  }),
]);

export const setUserError: Reducer<UserState, AnyAction> = mergeLeft({
  [UserEnum.Error]: true,
  [UserEnum.Loading]: false,
});

// eslint-disable-next-line react-hooks/rules-of-hooks
export const setHasLocation: Reducer<UserState, AnyAction> = useWith(mergeRight, [
  identity,
  applySpec({
    [UserEnum.HasLocation]: prop('payload'),
  }),
]);

export const setUserLoading: Reducer<UserState, AnyAction> = mergeLeft({
  [UserEnum.Loading]: true,
  [UserEnum.Error]: false,
});

// eslint-disable-next-line react-hooks/rules-of-hooks
export const setAuthModal: Reducer<UserState, AnyAction> = useWith(mergeRight, [
  identity,
  applySpec({
    [UserEnum.AuthModal]: prop('payload'),
  }),
]);

const getHydrateData = pathOr<UserState[UserEnum.Data]>(null, [
  'payload',
  UserEnum.User,
  UserEnum.Data,
]);

const getHydrateError = pathOr<UserState[UserEnum.Error]>(false, [
  'payload',
  UserEnum.User,
  UserEnum.Error,
]);

const getHydrateAuthModal = pathOr<UserState[UserEnum.AuthModal]>(null, [
  'payload',
  UserEnum.User,
  UserEnum.AuthModal,
]);

const getHydrateHasLocation = pathOr<UserState[UserEnum.HasLocation]>(false, [
  'payload',
  UserEnum.User,
  UserEnum.HasLocation,
]);

const getHydrateUserAccessToken = pathOr<UserState[UserEnum.AccessToken]>(null, [
  'payload',
  UserEnum.User,
  UserEnum.AccessToken,
]);

export const hydrateUserStore: HydrateReducer<any, AnyAction, UserState> = flip(
  applySpec({
    [UserEnum.Data]: getHydrateData,
    [UserEnum.Error]: getHydrateError,
    [UserEnum.HasLocation]: getHydrateHasLocation,
    [UserEnum.AuthModal]: getHydrateAuthModal,
    [UserEnum.Loading]: F,
    [UserEnum.AccessToken]: getHydrateUserAccessToken,
  })
);
