import { userHasCoordinates } from '../index';

const makeSut = () => ({ sut: userHasCoordinates });

describe(userHasCoordinates.name, () => {
  it('false if object has no coordinates', () => {
    const { sut } = makeSut();

    const result = sut({ location: { coordinates: [] } });

    expect(result).toBe(false);
  });

  it('true if object has coordinates', () => {
    const { sut } = makeSut();

    const result = sut({ location: { coordinates: [1, 2] } });

    expect(result).toBe(true);
  });
});
