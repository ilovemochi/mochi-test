import { removeScript } from '../index';

const makeSut = () => ({ sut: removeScript });

describe('removeScript', () => {
  it('expect to call document.getElementById and remove child if element exists', () => {
    const removeChild = jest.fn();

    Object.defineProperty(document, 'getElementById', {
      value: jest.fn().mockReturnValue({ parentNode: { removeChild } }),
      writable: true,
    });

    const { sut } = makeSut();

    sut('any_id');
    expect(document.getElementById).toHaveBeenCalledWith('any_id');
    expect(removeChild).toHaveBeenCalled();
  });

  it('expect to call document.getElementById and remove child if element exists', () => {
    const removeChild = jest.fn();

    document.getElementById = jest.fn().mockReturnValue(null);

    const { sut } = makeSut();

    sut('any_id');
    expect(document.getElementById).toHaveBeenCalledWith('any_id');
    expect(removeChild).not.toHaveBeenCalled();
  });
});
