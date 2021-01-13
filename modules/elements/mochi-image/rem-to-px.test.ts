import { remToPx } from './index';

const makeSut = () => ({ sut: remToPx });

describe(remToPx.name, () => {
  it('converts rem string to px number', () => {
    const { sut } = makeSut();
    expect(sut('10rem')).toBe(100);
  });
});
