import { MakeTestStripeOrder } from '@ilovemochi/test-suite';

import { makeAuthorizationHeader, serverPost } from '../../utils';
import { PostPay } from '../index';

jest.mock('../../utils.ts', () => ({
  serverPost: jest.fn().mockResolvedValue('response'),
  makeAuthorizationHeader: jest.fn().mockImplementation((accessToken: string) => ({
    Authorization: `Bearer ${accessToken}`,
  })),
}));

const makeSut = () => ({ sut: PostPay });
const payload = MakeTestStripeOrder();
describe('Post Pay API Helper', () => {
  it('calls the server post with the right data', async () => {
    const { sut } = makeSut();
    await sut({ payload, accessToken: 'access_token' });
    expect(serverPost).toHaveBeenCalledTimes(1);
    expect(serverPost).toHaveBeenCalledWith(
      'order/pay',
      payload,
      makeAuthorizationHeader('access_token')
    );
  });
  it('returns response from the server post', async () => {
    const { sut } = makeSut();
    const result = await sut({ payload, accessToken: 'access_token' });
    expect(result).toBe('response');
  });
});
