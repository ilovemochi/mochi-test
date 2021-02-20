import { renderHook } from '@testing-library/react-hooks';

import useIsFirstRender from './use-is-first-render';

describe('useIsFirstRender hook', () => {
  const { result } = renderHook(() => useIsFirstRender());

  it('it should return true, after component is mounted', () => {
    expect(result.current).toBe(true);
  });

  it('it should return false, after component is re-mounted', () => {
    const { result, rerender } = renderHook(() => useIsFirstRender());

    rerender(useIsFirstRender);
    expect(result.current).toBe(false);
  });
});
