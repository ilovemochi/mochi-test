import { MakeTestBaseUser } from '@ilovemochi/test-suite';

import { getUserCity } from '../index';

const sut = getUserCity;

describe('getUserCity', () => {
  it('to get the user city', () => {
    const user = MakeTestBaseUser();
    expect(sut(user)).toBe(user.location.address.city);
  });
});
