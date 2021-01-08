import { MakeTestBaseUser } from '@ilovemochi/test-suite';

import { getUserGender } from '../index';

const sut = getUserGender;

describe('getUserGender', () => {
  it('to get the user Gender ', () => {
    const user = MakeTestBaseUser();
    expect(sut(user)).toBe(user.gender);
  });
});
