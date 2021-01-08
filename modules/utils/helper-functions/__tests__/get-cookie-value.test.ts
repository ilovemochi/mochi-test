import { getCookieValue } from '../index';

const makeSut = () => ({ sut: getCookieValue });

describe(getCookieValue.name, () => {
  it('expect to get the value of cookie mochi_session', () => {
    const { sut } = makeSut();

    const cookie = 'mochi_session=cookieValue';
    const cookieName = 'mochi_session';
    const cookieValue = sut({ cookieName, cookie });
    expect(cookieValue).toBe('cookieValue');
  });
});
