import { MakeTestBaseUser } from '@ilovemochi/test-suite';

import { getUserName } from '../index';

const sut = getUserName;

describe('getUserName', () => {
  it('to get the user name ', () => {
    const user = MakeTestBaseUser();
    expect(sut(user)).toBe(user.name);
  });
});
