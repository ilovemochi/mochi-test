import { serverPost } from '../../utils';
import { GoogleSignIn } from '../index';

jest.mock('../../utils.ts', () => ({
  serverPost: jest.fn().mockResolvedValue('response'),
}));

describe(GoogleSignIn.name, () => {
  const payload = {
    idToken: 'any_id',
  };

  it('calls the server post with the right data', async () => {
    await GoogleSignIn(payload);
    expect(serverPost).toHaveBeenCalledTimes(1);
    expect(serverPost).toHaveBeenCalledWith('user/googleSignIn', payload);
  });
  it('returns response from the server post', async () => {
    const result = await GoogleSignIn(payload);
    expect(result).toBe('response');
  });
});
