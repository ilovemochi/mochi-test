import { serverPost } from '../../utils';
import { SignUp } from '../index';

jest.mock('../../utils.ts', () => ({
  serverPost: jest.fn().mockResolvedValue('response'),
}));

describe(SignUp.name, () => {
  const payload = {
    password: 'any_password',
    passwordConfirmation: 'any_password',
    name: 'any_name',
    email: 'any_email',
  };

  it('calls the server get with the right data', async () => {
    await SignUp(payload);
    expect(serverPost).toHaveBeenCalledTimes(1);
    expect(serverPost).toHaveBeenCalledWith('user/signUp', payload);
  });
  it('returns response from the server post', async () => {
    const result = await SignUp(payload);
    expect(result).toBe('response');
  });
});
