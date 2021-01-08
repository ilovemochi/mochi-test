import { MakeTestBaseUser } from '@ilovemochi/test-suite';

import { getUserStreet } from '../index';

const sut = getUserStreet;

describe('getUserStreet', () => {
  it('to get the user Street ', () => {
    const user = MakeTestBaseUser();
    expect(sut(user)).toBe(user.location.address.street);
  });
});
