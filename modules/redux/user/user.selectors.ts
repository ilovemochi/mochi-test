import memoize from 'fast-memoize';

import {
  getInAccessToken,
  getInUserAuthModal,
  getInUserData,
  getInUserDataAccessToken,
  getInUserError,
  getInUserHasLocation,
  getInUserLoading,
} from './user.selectors-helpers';

export const getAuthModal = memoize(getInUserAuthModal);

export const getUserData = memoize(getInUserData);

export const getUserError = memoize(getInUserError);

export const getUserLoading = memoize(getInUserLoading);

export const getUserHasLocation = memoize(getInUserHasLocation);

export const getAccessToken = memoize(getInAccessToken);

export const getUserDataAccessToken = memoize(getInUserDataAccessToken);
