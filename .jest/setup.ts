import '@testing-library/jest-dom';
import 'jest-styled-components';
import ReactModal from 'react-modal';

jest.setTimeout(10000);

jest.mock('next/router', () => ({
  replace: jest.fn().mockReturnValue(Promise.resolve()),
  useRouter: jest.fn().mockReturnValue({
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
  }),
}));

jest.spyOn(ReactModal, 'setAppElement').mockImplementation(() => {});

/**
 * @description Polyfill for match media - React Slick
 * @link https://github.com/akiran/react-slick/blob/master/test-setup.js
 */
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  function (callback) {
    setTimeout(callback, 0);
  };

/**
 * @description Silence console.warn in jest
 */
jest.spyOn(console, 'warn').mockImplementation(jest.fn());
