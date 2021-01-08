import { serverPost } from '../../utils';
import { Login } from '../index';

jest.mock('../../utils.ts', () => ({
  serverPost: jest.fn().mockResolvedValue('response'),
}));

describe(Login.name, () => {
  const payload = {
    password: 'any_password',
    email: 'any_email',
  };

  it('calls the server post with the right data', async () => {
    await Login(payload);
    expect(serverPost).toHaveBeenCalledTimes(1);
    expect(serverPost).toHaveBeenCalledWith('user/login', payload);
  });
  it('returns response from the server post', async () => {
    const result = await Login(payload);
    expect(result).toBe('response');
  });
});
