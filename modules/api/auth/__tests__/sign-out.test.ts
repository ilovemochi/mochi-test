import { serverGet } from '../../utils';
import { SignOut } from '../index';

jest.mock('../../utils.ts', () => ({
  serverGet: jest.fn().mockResolvedValue('response'),
}));

describe(SignOut.name, () => {
  it('calls the server get with the right data', async () => {
    await SignOut();
    expect(serverGet).toHaveBeenCalledTimes(1);
    expect(serverGet).toHaveBeenCalledWith('user/signOut');
  });
  it('returns response from the server post', async () => {
    const result = await SignOut();
    expect(result).toBe('response');
  });
});
