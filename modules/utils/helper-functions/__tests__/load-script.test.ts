import { loadScript } from '../index';

const makeSut = () => ({ sut: loadScript });

describe(loadScript.name, () => {
  const spyAppendChild = jest.spyOn(document.body, 'appendChild');
  const callback = jest.fn();
  const data: any = { id: 'any_id', src: 'any_src', callback };

  it('do not call document.body.appendChild because the elements exist ', () => {
    Object.defineProperty(document, 'getElementById', {
      value: jest.fn().mockReturnValue(true),
      writable: true,
    });
    document.body.innerHTML = '<div><span id="any_id">mochi</span></div>';
    const { sut } = makeSut();
    sut(data);
    expect(spyAppendChild).not.toHaveBeenCalled();
    expect(callback).toHaveBeenCalled();
  });

  it('call document.body.appendChild because the elements does not exist', () => {
    Object.defineProperty(document, 'getElementById', {
      value: jest.fn().mockReturnValue(false),
      writable: true,
    });
    const { sut } = makeSut();
    sut(data);
    expect(spyAppendChild).toHaveBeenCalled();
    expect(callback).toHaveBeenCalled();
  });
});
