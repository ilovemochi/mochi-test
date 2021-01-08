import { Cookies } from '@ilovemochi/enums';

import { MyAppRequest } from '../../../typescript';
import { defaultLanguage } from '../../i18n';
import { getCookieHeaders, getCookieValue } from '../index';

// eslint-disable-next-line import/prefer-default-export
export const getRequestCookies = (request: MyAppRequest) => {
  const cookie = getCookieHeaders(request);
  return {
    refreshCookie: getCookieValue({ cookie, cookieName: Cookies.MochiUserRefresh }),
    locationCookie: getCookieValue({ cookie, cookieName: Cookies.MochiLocation }),
    langCookie: getCookieValue({ cookie, cookieName: Cookies.MochiLang }) || defaultLanguage,
    cookie,
  };
};
