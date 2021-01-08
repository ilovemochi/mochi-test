import { objectToQuery, serverGet } from '../../utils';
import { GetUserOrders } from '../index';

jest.mock('../../utils.ts', () => ({
  serverGet: jest.fn().mockResolvedValue('response'),
  objectToQuery: jest.fn().mockReturnValue('?key=value&key2=value2'),
}));

const makeSut = () => ({ sut: GetUserOrders });

describe('Get User Orders API Helper', () => {
  it('calls the server get with the right data', async () => {
    const { sut } = makeSut();
    await sut({ key: 'value', key2: 'value2' }, { cookie: 'delicious' });
    expect(objectToQuery).toHaveBeenCalledWith({ key: 'value', key2: 'value2' });
    expect(serverGet).toHaveBeenCalledWith(
      'user/orders?key=value&key2=value2',
      {},
      { cookie: 'delicious' }
    );
  });

  it('returns the response from the server get', async () => {
    const { sut } = makeSut();
    const result = await sut({ key: 'value' }, { cookie: 'delicious' });
    expect(result).toBe('response');
  });
});
