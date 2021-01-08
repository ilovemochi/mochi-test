import { MakeTestBaseUser } from '@ilovemochi/test-suite';

import { getUserZip } from '../index';

const sut = getUserZip;

describe('getUserZip', () => {
  it('to get the user Zip ', () => {
    const user = MakeTestBaseUser();
    expect(sut(user)).toBe(user.location.address.zip);
  });
});
