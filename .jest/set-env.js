process.browser = true;
process.env.NEXT_PUBLIC_IS_DEVELOPMENT = '1';
process.env.NEXT_PUBLIC_S3_BUCKET = 'S3_BUCKET/';
process.env.NEXT_PUBLIC_SERVER_URL = 'SERVER_URL';

Object.defineProperty(window, 'google', {
  value: {
    maps: {},
  },
  writable: true,
});
