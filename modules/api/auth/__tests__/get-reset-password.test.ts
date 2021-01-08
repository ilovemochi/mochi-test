import { serverGet } from '../../utils';
import { GetResetPassword } from '../index';

jest.mock('../../utils.ts', () => ({
  serverGet: jest.fn().mockResolvedValue('response'),
}));

describe(GetResetPassword.name, () => {
  const token = 'token';

  it('calls the server get with the right data', async () => {
    await GetResetPassword(token);
    expect(serverGet).toHaveBeenCalledTimes(1);
    expect(serverGet).toHaveBeenCalledWith(`user/resetPassword/${token}`);
  });
  it('returns response from the server get', async () => {
    const result = await GetResetPassword(token);
    expect(result).toBe('response');
  });
});
