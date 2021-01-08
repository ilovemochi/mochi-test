import { capitalize } from '../index';

const makeSut = () => ({ sut: capitalize });
describe(capitalize.name, () => {
  it('capitalizes the string passed', () => {
    const { sut } = makeSut();
    const result = sut('mochi');
    expect(result).toBe('Mochi');
  });
});
