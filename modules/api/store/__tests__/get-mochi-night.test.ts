import { serverGet } from '../../utils';
import { GetMochiNight } from '../index';

jest.mock('../../utils.ts', () => ({ serverGet: jest.fn().mockResolvedValue('response') }));

const makeSut = () => ({ sut: GetMochiNight });
const headers = { cookie: 'delicious' };

describe("Get Store and MochiNight API's Helper", () => {
  it('calls the server get with the right data', async () => {
    const { sut } = makeSut();
    await sut(headers);
    expect(serverGet).toHaveBeenCalledWith(`mochiNight/`, {}, headers);
  });

  it('returns the response from the server get', async () => {
    const { sut } = makeSut();
    const result = await sut(headers);
    expect(result).toBe('response');
  });
});
