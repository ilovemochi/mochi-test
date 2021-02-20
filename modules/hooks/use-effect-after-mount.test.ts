import { renderHook } from '@testing-library/react-hooks';

import useEffectAfterMount from './use-effect-after-mount';

describe('useEffectAfterMount hook', () => {
  let x: number;
  let y: number;
  let inc: number = 0;

  beforeEach(() => {
    assignRandomValues();
  });

  afterEach(() => {
    assignRandomValues();
  });

  function increment() {
    inc++;
  }

  function assignRandomValues() {
    x = Math.random();
    y = Math.random();
  }

  it('it should return 0 if the dependencies do not change', () => {
    const { result } = renderHook(() => useEffectAfterMount(increment, [x, y]));

    expect(inc).toBe(0);
  });

  it('it should return greater than 0 if the dependencies do change', () => {
    const { rerender } = renderHook(() => useEffectAfterMount(increment, [x, y]));

    expect(inc).toBe(0);
    assignRandomValues();
    rerender();

    assignRandomValues();
    rerender();

    expect(inc).toBeGreaterThan(0);
  });
});
