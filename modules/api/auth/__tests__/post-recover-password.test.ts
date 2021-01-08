import { serverPost } from '../../utils';
import { PostRecoverPassword } from '../index';

jest.mock('../../utils.ts', () => ({
  serverPost: jest.fn().mockResolvedValue('response'),
}));

describe(PostRecoverPassword.name, () => {
  const payload = { email: 'any_email' };

  it('calls the server post with the right response', async () => {
    await PostRecoverPassword(payload);
    expect(serverPost).toHaveBeenCalledTimes(1);
    expect(serverPost).toHaveBeenCalledWith('user/recoverPassword', payload);
  });
  it('returns response from the server post', async () => {
    const result = await PostRecoverPassword(payload);
    expect(result).toBe('response');
  });
});
