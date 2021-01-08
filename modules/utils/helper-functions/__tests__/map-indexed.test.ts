import { mapIndexed } from '../index';

const makeSut = () => ({ sut: mapIndexed });

describe('mapIndexed', () => {
  it('returns the value and index', () => {
    const { sut } = makeSut();
    const data = ['1', '2'];
    const result = sut((x, y) => y)(data);
    const resultTwo = sut(x => x)(data);
    expect(result).toEqual([0, 1]);
    expect(resultTwo).toEqual(data);
  });
});
