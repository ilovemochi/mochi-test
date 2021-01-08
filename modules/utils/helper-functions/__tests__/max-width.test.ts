import { css } from 'styled-components';

import { maxWidth } from '../index';

const makeSut = () => ({ sut: maxWidth });

describe('maxWidth', () => {
  it('returns @media rule for TabletLandscapeUp max width ', () => {
    const { sut } = makeSut();

    expect(
      sut.forTabletLandscapeUp(css`
        display: flex;
        width: 100%;
      `)
    ).toEqual(['@media (', 'max-', 'width:', '56.25', 'em){', 'display:flex;width:100%;', ';}']);
  });
});
