import { isNew } from '../index';

const makeSut = () => ({ sut: isNew });

describe('isNew', () => {
  it('returns true if the date is within a month', () => {
    const today = new Date();

    const { sut } = makeSut();
    const result = sut(today.toUTCString());
    expect(result).toBe(true);
  });

  it('returns false if the date  is over 1 month old', () => {
    const { sut } = makeSut();
    const today = new Date();

    const oldDate = new Date();
    oldDate.setMonth(today.getMonth() - 2);

    const result = sut(oldDate.toUTCString());
    expect(result).toBe(false);
  });
});
