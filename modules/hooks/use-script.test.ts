import { renderHook, act } from '@testing-library/react-hooks';

import useScript from './use-script';

const UseScriptProps = {
  id: 'srcTest',
  src: 'https://pokeapi.co/api/v2/berry/1/',
  async: false,
};

describe('useScriptHook hooks', () => {
  it('it should NOT have a script element before initialization', () => {
    expect(document.querySelectorAll('script').length).toBe(0);
  });

  it('it should have an HTML script element', () => {
    const { result } = renderHook(() => useScript(UseScriptProps));
    // expect(document.querySelectorAll('script').length).toBe(1);

    expect(document.querySelectorAll('script').length).toBe(1);
    expect(document.querySelectorAll('#' + UseScriptProps.id).length).toBe(1);
  });

  it('it should NOT have a script element after unmounting', () => {
    const { unmount } = renderHook(() => useScript(UseScriptProps));
    // expect(document.querySelectorAll('script').length).toBe(1);

    expect(document.querySelectorAll('script').length).toBe(1);
    expect(document.querySelectorAll('#' + UseScriptProps.id).length).toBe(1);

    unmount();

    expect(document.querySelectorAll('script').length).toBe(0);
    expect(document.querySelectorAll('#' + UseScriptProps.id).length).toBe(0);
  });
});
