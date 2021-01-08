import { flippedMap } from '../index';

const makeSut = () => ({ sut: flippedMap });
describe('flippedMap', () => {
  it('receives the data first and then the function', () => {
    const data = [1, 2, 3];
    const double = x => x * 2;
    const { sut } = makeSut();
    const result = sut(data, double);
    expect(result).toEqual([2, 4, 6]);
  });
});
