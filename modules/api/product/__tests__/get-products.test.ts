import { objectToQuery, serverGet } from '../../utils';
import { GetProducts } from '../index';

jest.mock('../../utils.ts', () => ({
  serverGet: jest.fn().mockResolvedValue('response'),
  objectToQuery: jest.fn().mockReturnValue('?key=value&key2=value2'),
}));

const makeSut = () => ({ sut: GetProducts });

describe('Get Products API Helper', () => {
  it('calls the server get with the right data', async () => {
    const { sut } = makeSut();
    await sut({ key: 'value', key2: 'value2' });
    expect(objectToQuery).toHaveBeenCalledWith({ key: 'value', key2: 'value2' });
    expect(serverGet).toHaveBeenCalledWith('product?key=value&key2=value2');
  });

  it('returns response from the server get', async () => {
    const { sut } = makeSut();
    const result = await sut({ key: 'value' });
    expect(result).toBe('response');
  });
});
