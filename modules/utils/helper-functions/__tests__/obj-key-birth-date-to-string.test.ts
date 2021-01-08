import { objKeyBirthDateToString } from '../index';

const makeSut = () => ({ sut: objKeyBirthDateToString });

describe('objKeyBirthDateToString', () => {
  it('', () => {
    const { sut } = makeSut();
    const date = new Date();
    const param = { birthDate: date };
    const result = sut(param);

    expect(result).toEqual({ birthDate: date.toISOString() });
  });
});
