import { MakeTestBaseUser } from '@ilovemochi/test-suite';

import { getUserEmail } from '../index';

const sut = getUserEmail;

describe('getUserEmail', () => {
  it('to get the user email ', () => {
    const user = MakeTestBaseUser();
    expect(sut(user)).toBe(user.email);
  });
});
