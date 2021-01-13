/* eslint-disable no-restricted-globals */
import { renderHook } from '@test-utils';
import { act } from 'react-test-renderer';

import useWindowSize from '../use-window-size';

describe(`useWindowSize hook`, () => {
  it('checks if hook catch right window size on resize', () => {
    const { result } = renderHook(() => useWindowSize());

    Object.defineProperties(window, {
      innerHeight: {
        writable: true,
        configurable: true,
        value: 1024,
      },
      innerWidth: {
        writable: true,
        configurable: true,
        value: 1440,
      },
    });

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toEqual({ width: 1440, height: 1024 });

    Object.defineProperties(window, {
      innerHeight: {
        writable: true,
        configurable: true,
        value: 768,
      },
      innerWidth: {
        writable: true,
        configurable: true,
        value: 1024,
      },
    });

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toEqual({ width: 1024, height: 768 });
  });
});
