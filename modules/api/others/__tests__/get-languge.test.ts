import { serverGet } from '../../utils';
import { GetLanguage } from '../index';

jest.mock('../../utils.ts', () => ({
  serverGet: jest.fn().mockResolvedValue('response'),
}));

const makeSut = () => ({ sut: GetLanguage });

describe('Get Language', () => {
  it('calls get language to change language', async () => {
    const { sut } = makeSut();
    await sut('pt');
    expect(serverGet).toHaveBeenCalledWith('language/pt');
  });

  it('returns the response', async () => {
    const { sut } = makeSut();
    const result = await sut('pt');
    expect(result).toBe('response');
  });
});
