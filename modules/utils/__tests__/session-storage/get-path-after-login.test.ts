import { getPathAfterLogin } from '../../session-storage';

const makeSut = () => ({ sut: getPathAfterLogin });

describe(getPathAfterLogin.name, () => {
  it('calls the dependency with the right values', () => {
    const fn = jest.fn().mockReturnValue('data');
    const { sut } = makeSut();
    const result = sut(fn);
    expect(fn).toHaveBeenCalledWith('PATH_AFTER_LOGIN');
    expect(result).toBe('data');
  });
});
