import { Cookies } from '@ilovemochi/enums';

import { getRequestCookies } from '../index';

const makeSut = () => ({ sut: getRequestCookies });

const mockCookie = {
  value_: '',

  get cookie() {
    // eslint-disable-next-line no-underscore-dangle
    return this.value_;
  },

  set cookie(value) {
    // eslint-disable-next-line no-underscore-dangle
    this.value_ += `${value};`;
  },
};

mockCookie.cookie = `${Cookies.MochiUserRefresh}=user`;
mockCookie.cookie = `${Cookies.MochiLocation}=location`;
mockCookie.cookie = `${Cookies.MochiLang}=lang`;

describe(getRequestCookies.name, () => {
  it('it returns the relevant cookies from the request', () => {
    const { sut } = makeSut();
    const result = sut({ headers: { cookie: mockCookie.cookie } } as any);
    expect(result).toEqual({
      refreshCookie: 'user',
      locationCookie: 'location',
      langCookie: 'lang',
      cookie: mockCookie.cookie,
    });
  });
});
