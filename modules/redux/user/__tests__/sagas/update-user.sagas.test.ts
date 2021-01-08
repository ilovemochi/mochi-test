import * as API from '@api';
import { MakeTestClientAPIResponse, MakeTestUser } from '@ilovemochi/test-suite';
import { IGenericObject, IUser } from '@ilovemochi/types';
import { makeSagaArgument, mockStoreUserState, recordSaga } from '@test-utils';
import { omit } from 'ramda';

import { addSuccessMessage } from '../../../operation-service/operation-service.actions';
import { createOperation } from '../../../redux-helpers';
import * as actions from '../../user.actions';
import { UserEnum } from '../../user.enum';
import { updateUser } from '../../user.sagas';

jest.mock('@api');

const error = {
  code: 10000,
  value: null,
};

const mockUser = MakeTestUser();
const mockUserResponse = MakeTestClientAPIResponse(mockUser);

describe(updateUser.name, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const state = mockStoreUserState({ [UserEnum.AccessToken]: 'access_token_3' });

  test('should update user information', async () => {
    (API as IGenericObject<any>).PostUpdateUser = jest.fn().mockResolvedValue(mockUserResponse);
    const dispatched = await recordSaga(state, updateUser, makeSagaArgument(mockUserResponse));

    expect(API.PostUpdateUser).toHaveBeenCalledTimes(1);
    expect(API.PostUpdateUser).toHaveBeenLastCalledWith({ ...mockUserResponse }, 'access_token_3');

    expect(dispatched).toContainEqual(actions.updateUserSuccess(mockUserResponse.data as IUser));
    expect(dispatched).toContainEqual(
      actions.setAccessToken(mockUserResponse.authData?.accessToken || '')
    );
    expect(dispatched).toContainEqual(addSuccessMessage(createOperation(11203)));
  });

  test('should update user information but not update the access token', async () => {
    (API as IGenericObject<any>).PostUpdateUser = jest
      .fn()
      .mockResolvedValue(omit(['authData'], mockUserResponse));
    const dispatched = await recordSaga(state, updateUser, makeSagaArgument(mockUserResponse));

    expect(API.PostUpdateUser).toHaveBeenCalledTimes(1);
    expect(API.PostUpdateUser).toHaveBeenLastCalledWith({ ...mockUserResponse }, 'access_token_3');
    expect(dispatched).not.toContainEqual(
      actions.setAccessToken(mockUserResponse.authData?.accessToken || '')
    );
    expect(dispatched).toContainEqual(actions.updateUserSuccess(mockUserResponse.data as IUser));
    expect(dispatched).toContainEqual(addSuccessMessage(createOperation(11203)));
  });

  test(`should call set user operation failure action if an error is thrown`, async () => {
    (API as IGenericObject<any>).PostUpdateUser = jest.fn().mockRejectedValue(error);
    const dispatched = await recordSaga(state, updateUser, makeSagaArgument(mockUserResponse));

    expect(API.PostUpdateUser).toHaveBeenCalledTimes(1);
    expect(API.PostUpdateUser).toHaveBeenCalledWith(mockUserResponse, 'access_token_3');

    expect(dispatched).toContainEqual(actions.setUserOperationFailure(error));
  });
});
