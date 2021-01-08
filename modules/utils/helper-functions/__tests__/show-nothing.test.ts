import { showNothing } from '../index';

const makeSut = () => ({ sut: showNothing });

describe('showNothing', () => {
  it('expect to be null', () => {
    const { sut } = makeSut();
    const result = sut();
    expect(result).toBeNull();
  });
});
