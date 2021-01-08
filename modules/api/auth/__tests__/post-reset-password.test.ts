import { serverPost } from '../../utils';
import { PostResetPassword } from '../index';

jest.mock('../../utils.ts', () => ({
  serverPost: jest.fn().mockResolvedValue('response'),
}));

describe(PostResetPassword.name, () => {
  const token = 'any_token';
  const password = 'any_password';

  it('calls the server post with the right response', async () => {
    await PostResetPassword({ token, password });
    expect(serverPost).toHaveBeenCalledTimes(1);
    expect(serverPost).toHaveBeenCalledWith(`user/resetPassword/${token}`, { password });
  });
  it('returns response from the server post', async () => {
    const result = await PostResetPassword({ token, password });
    expect(result).toBe('response');
  });
});
