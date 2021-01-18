import { AppProps } from '@typescript';
import NextApp from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '../styles/theme';

class App extends NextApp<AppProps> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}

export default App;
