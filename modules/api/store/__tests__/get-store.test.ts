import { serverGet } from '../../utils';
import { GetStore } from '../index';

jest.mock('../../utils.ts', () => ({ serverGet: jest.fn().mockResolvedValue('response') }));

const makeSut = () => ({ sut: GetStore });

describe("Get Store and MochiNight API's Helper", () => {
  it('calls the server get with the right data', async () => {
    const { sut } = makeSut();
    await sut('value');
    expect(serverGet).toHaveBeenCalledWith('store/value');
  });

  it('returns response from the server get', async () => {
    const { sut } = makeSut();
    const result = await sut('value');
    expect(result).toBe('response');
  });
});
