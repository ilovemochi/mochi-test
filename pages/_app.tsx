import { GlobalStyle } from '@design-system';
export enum Cookies {
  MochiUserRefresh = "__mochi_user_refresh",
  MochiStoreOwnerRefresh = "__mochi_store_owner_refresh",
  MochiDriverRefresh = "__mochi_driver_refresh",
  MochiLocation = "__mochi_location",
  MochiLang = "__mochi_lang"
}

import { AppProps, InitialProps, MyAppRequest } from '@typescript';
import { getCookieValue } from '@utils/helper-functions';
import { getRequestCookies } from '@utils/helper-functions/app-utils';
import I18n, { defaultLanguage } from '@utils/i18n';
import NextApp from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';

class App extends NextApp<AppProps> {
  static async getInitialProps({ Component, ctx }: InitialProps) {

    let locale: string;
    const request = ctx.req as MyAppRequest;

    // Run this code only in the server side where request exists
    if (request) {
      // Grab the Cookies
      const { langCookie } = getRequestCookies(request);

      // Update the locale
      locale = langCookie;

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

export default App;
