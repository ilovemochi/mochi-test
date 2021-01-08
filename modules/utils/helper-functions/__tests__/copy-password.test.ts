import { User } from '@ilovemochi/enums';

import { copyPassword } from '../index';

describe('copyPassword', () => {
  it(`expect to copy the password from x to ${User.PasswordConfirmation}`, () => {
    const x = { password: 'mochi' };
    const result = copyPassword(x);
    expect(result).toHaveProperty(User.PasswordConfirmation);
    expect(result).toEqual({ [User.PasswordConfirmation]: x[User.Password] });
  });
});
