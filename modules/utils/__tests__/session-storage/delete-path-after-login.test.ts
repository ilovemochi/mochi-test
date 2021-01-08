import { deletePathAfterLogin } from '../../session-storage';

const makeSut = () => ({ sut: deletePathAfterLogin });

describe(deletePathAfterLogin.name, () => {
  it('sets the value in the session storage', () => {
    process.browser = true;
    const { sut } = makeSut();
    sut();
    const result = window.sessionStorage.getItem('PATH_AFTER_LOGIN');
    expect(result).toBe(null);
  });
});
