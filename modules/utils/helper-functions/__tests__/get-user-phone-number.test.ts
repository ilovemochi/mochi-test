import { MakeTestBaseUser } from '@ilovemochi/test-suite';

import { getUserPhoneNumber } from '../index';

const sut = getUserPhoneNumber;

describe('getUserPhoneNumber', () => {
  it('to get the user PhoneNumber ', () => {
    const user = MakeTestBaseUser();
    expect(sut(user)).toBe(user.phone);
  });
});
