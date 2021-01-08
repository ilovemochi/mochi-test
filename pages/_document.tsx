import { Cookies } from '@ilovemochi/enums';
import { MyDocumentProps } from '@typescript';
import { getCookieHeaders, getCookieValue } from '@utils/helper-functions';
import { defaultLanguage } from '@utils/i18n';
import NextDocument, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class Document extends NextDocument<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    let lang: string;
    try {
      const request = ctx.req;

      if (request) {
        const cookie = getCookieHeaders(request);
        lang = getCookieValue({ cookie, cookieName: Cookies.MochiLang }) || defaultLanguage;
      } else {
        lang =
          getCookieValue({ cookie: document.cookie, cookieName: Cookies.MochiLang }) ||
          defaultLanguage;
      }
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        lang,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
