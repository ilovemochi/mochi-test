import { noop } from '../index';

const makeSut = () => ({ sut: noop });

describe('noop', () => {
  it('expect nothing from noop', () => {
    const { sut } = makeSut();

    expect(sut()).toBe(undefined);
    expect(typeof sut).toBe('function');
  });
});
