import { css } from 'styled-components';

import { minWidth } from '../index';

const makeSut = () => ({ sut: minWidth });

describe('minWidth', () => {
  it('retuns css @media rule just for phone with min-height and width', () => {
    const { sut } = makeSut();

    expect(
      sut.forPhoneOnly(
        css`
          width: 600px;
          min-height: 200px;
        `
      )
    ).toEqual([
      '@media (',
      'min-',
      'width:',
      '37.4375',
      'em){',
      'width:600px;min-height:200px;',
      ';}',
    ]);
  });
});
