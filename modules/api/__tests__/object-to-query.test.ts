import { objectToQuery } from '../utils';

const makeSut = () => ({ sut: objectToQuery });

describe(objectToQuery.name, () => {
  it('properly maps an object to a query string', () => {
    const { sut } = makeSut();
    const result = sut({ key: 1, keyTwo: 2 });
    expect(result).toBe('?key=1&keyTwo=2');
  });
});
