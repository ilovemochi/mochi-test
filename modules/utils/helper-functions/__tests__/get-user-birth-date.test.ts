import { MakeTestBaseUser } from '@ilovemochi/test-suite';

import { getUserBirthDate } from '../index';

const makeSut = () => ({ sut: getUserBirthDate });

describe('getUserBirthDate', () => {
  it('to get the user birth date ', () => {
    const user = MakeTestBaseUser();
    const { sut } = makeSut();
    const result = sut(user);

    expect(result).toBe(user.birthDate);
  });
});
