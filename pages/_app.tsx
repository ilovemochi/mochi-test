import { RefreshAuth, ServerException } from '@api';
import { RefreshAuthJson } from '@api/auth/auth-protocols';
import DEFAULT_CONFIG from '@constants/config';
import { GlobalStyle } from '@design-system';
import { Cookies, LoggedOut, NoLocation } from '@ilovemochi/enums';
import { SagaStore } from '@redux/redux.types';
import { UserState } from '@redux/state.types';
import { wrapper } from '@redux/store';
import {
  loadInitialUserData,
  setAccessToken,
  setHasLocation,
  setUserOperationFailure,
} from '@redux/user/user.actions';
import { UserEnum } from '@redux/user/user.enum';
import { AppProps, InitialProps, MyAppRequest } from '@typescript';
import { getCookieValue } from '@utils/helper-functions';
import { getRequestCookies } from '@utils/helper-functions/app-utils';
import I18n, { defaultLanguage } from '@utils/i18n';
import NextApp from 'next/app';
import { isEmpty } from 'ramda';
import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';

class App extends NextApp<AppProps> {
  static async getInitialProps({ Component, ctx }: InitialProps) {
    if (!process.browser) {
      // Stop the server saga process if we are in the client side
      await (ctx.store as SagaStore).stopSaga();
    }

    let locale: string;
    const request = ctx.req as MyAppRequest;

    // Run this code only in the server side where request exists
    if (request) {
      // Grab the Cookies
      const { refreshCookie, locationCookie, langCookie, cookie } = getRequestCookies(request);

      // Update the locale
      locale = langCookie;

      // Grab the user from the store if it exists
      const user = ctx.store.getState()[UserEnum.User][UserEnum.Data] as UserState['data'];

      await (ctx.store as SagaStore).runSagaTask(async dispatch => {
        // Update the User location based on the location cookie
        dispatch(setHasLocation(locationCookie === NoLocation ? false : !!locationCookie));

        if (!user && refreshCookie && refreshCookie !== LoggedOut) {
          try {
            // Grab a new refresh and access cookie
            const response = await RefreshAuth(cookie);
            const data = (await response.json()) as RefreshAuthJson;

            // Pass the new refresh cookie to the client side
            ctx.res?.setHeader('Set-Cookie', response.headers.get('set-cookie') || '');

            if (response.ok) {
              dispatch(loadInitialUserData(isEmpty(data.data) ? null : data.data));
              dispatch(setAccessToken(data.accessToken));
            }
          } catch (error) {
            dispatch(setUserOperationFailure(ServerException(error)));
          }
        }
      });
    } else {
      locale =
        getCookieValue({ cookie: document.cookie, cookieName: Cookies.MochiLang }) ||
        defaultLanguage;
    }

    const lngDict = (await import(`../locales/${locale}.json`)).default;
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps, locale, lngDict };
  }

  render() {
    const { Component, pageProps, locale, lngDict } = this.props;

    return (
      <I18n locale={locale} lngDict={lngDict}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </I18n>
    );
  }
}

export default wrapper.withRedux(App);
