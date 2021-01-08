import { MakeTestBaseUser } from '@ilovemochi/test-suite';

import { getUserWhatsapp } from '../index';

const sut = getUserWhatsapp;

describe('getUserWhatsapp', () => {
  it('to get the user Whatsapp ', () => {
    const user = MakeTestBaseUser();
    expect(sut(user)).toBe(user.whatsApp);
  });
});
