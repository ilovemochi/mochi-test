import { MakeTestUser } from '@ilovemochi/test-suite';

import { serverPost } from '../../utils';
import { PostUpdateUser } from '../index';

jest.mock('../../utils.ts', () => ({
  serverPost: jest.fn().mockResolvedValue('response'),
  makeAuthorizationHeader: jest.fn().mockImplementation((accessToken: string) => ({
    Authorization: `Bearer ${accessToken}`,
  })),
}));

const makeSut = () => ({ sut: PostUpdateUser });

const user = MakeTestUser();

describe(PostUpdateUser.name, () => {
  it('calls the server get with the right data', async () => {
    const { sut } = makeSut();
    const result = await sut(user, 'access_token');
    expect(serverPost).toHaveBeenCalledWith('user/updateUser', user, {
      Authorization: 'Bearer access_token',
    });
    expect(result).toBe('response');
  });
});
