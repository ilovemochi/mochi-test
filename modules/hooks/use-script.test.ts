import { renderHook, act } from '@testing-library/react-hooks';

import useScript from './use-script';

const UseScriptProps = {
  id: 'srcTest',
  src: 'https://pokeapi.co/api/v2/berry/1/',
  async: false,
};

describe('useScriptHook hooks', () => {
  it('it should not have an HTML script element', () => {
    expect(document.querySelectorAll('script').length).toBe(0);
  });

  it('it should have an HTML script element', () => {
    const { result } = renderHook(() => useScript(UseScriptProps));
    // expect(document.querySelectorAll('script').length).toBe(1);

    expect(document.querySelectorAll('script').length).toBe(1);
    expect(document.querySelectorAll('#' + UseScriptProps.id).length).toBe(1);
  });
});
