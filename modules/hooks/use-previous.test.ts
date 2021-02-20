import { renderHook } from '@testing-library/react-hooks';

import usePrevious from './use-previous';

describe('usePrevious hooks', () => {
  it('it compares if the initial variable value is undefined', () => {
    const { result, rerender } = renderHook(() => usePrevious(0));
    expect(result.current).toBeUndefined;
  });

  it('it returns the first initialized defined value', () => {
    const { result, rerender } = renderHook(() => usePrevious(0));

    expect(result.current).toBeUndefined;

    rerender(1);
    expect(result.current).toBe(0);
  });
});
