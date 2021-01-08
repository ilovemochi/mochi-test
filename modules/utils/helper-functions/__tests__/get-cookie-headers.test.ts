import { getCookieHeaders } from '../index';

const makeSut = () => ({ sut: getCookieHeaders });

describe('getCookieHeaders', () => {
  it('get the cookie data from the headers', () => {
    const { sut } = makeSut();
    expect(sut({ headers: { cookie: 'cookie from headers' } })).toBe('cookie from headers');
  });
});
