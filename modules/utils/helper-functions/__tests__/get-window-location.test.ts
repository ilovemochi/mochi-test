import Route from '../../../constants/routes';
import { getWindowLocation } from '../index';

const sut = getWindowLocation;

describe('getWindowLocation', () => {
  it(`expect to fail and return ${Route.Home}`, () => {
    Object.defineProperty(window, 'location', {
      value: {},
      writable: true,
    });
    expect(sut()).toBe('/');
  });
  it(`expect to fail and return ${Route.Home}`, () => {
    Object.defineProperty(window, 'location', {
      value: { href: 'https://ilovemochi.com/contact', host: 'ilovemochi.com' },
      writable: true,
    });
    expect(sut()).toBe('/contact');
  });
});
