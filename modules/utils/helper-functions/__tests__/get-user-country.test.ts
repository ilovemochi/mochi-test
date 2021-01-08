import { MakeTestBaseUser } from '@ilovemochi/test-suite';

import { getUserCountry } from '../index';

const sut = getUserCountry;

describe('getUserCountry', () => {
  it('to get the user country ', () => {
    const user = MakeTestBaseUser();
    expect(sut(user)).toBe(user.location.address.country);
  });
});
