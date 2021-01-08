import { isDevelopment } from '../index';

describe('isDevelopment', () => {
  it('expect to be false if it is development', () => {
    expect(isDevelopment).toBe(true);
  });
});
