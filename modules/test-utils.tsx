/* eslint import/no-extraneous-dependencies: 0 */
import { render as __render } from '@testing-library/react';
import { renderHook as __renderHook, RenderHookOptions } from '@testing-library/react-hooks';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { NextRouter } from 'next/router';
import { omit } from 'ramda';
import { FC, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';
import { CustomRenderOptions } from './test-utils.types';

const routerMock: NextRouter = {
  route: '',
  basePath: '',
  pathname: '',
  query: {},
  asPath: '',
  push: jest.fn().mockReturnValue(Promise.resolve()),
  replace: jest.fn().mockReturnValue(Promise.resolve()),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  beforePopState: jest.fn(),
  isFallback: false,
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
};

export const Wrapper: FC = ({ children }) => {
  return (
    <RouterContext.Provider value={routerMock}>
      <ThemeProvider theme={theme}>
        <div id="__next">{children}</div>
      </ThemeProvider>
    </RouterContext.Provider>
  );
};

/**
 * @description newTheme key is temporary until we refactor
 * @param reactElement
 * @param options
 * @param initialState
 * @param newTheme {boolean}
 */
const customRender = (reactElement: ReactElement, options: CustomRenderOptions = {}) => {
  return __render(reactElement, {
    wrapper: Wrapper,
    ...omit(['newTheme', 'initialState'], options),
  });
};

export function renderHook<P, R>(callback: (props: P) => R, options?: RenderHookOptions<P>) {
  return __renderHook(callback, { wrapper: Wrapper, ...options });
}

export { default as userEvent } from '@testing-library/user-event';

export * from '@testing-library/react';

export { customRender as render };
