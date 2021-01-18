process.browser = true;
process.env.NEXT_PUBLIC_IS_DEVELOPMENT = '1';

Object.defineProperty(window, 'google', {
  value: {
    maps: {},
  },
  writable: true,
});
