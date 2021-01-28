import { renderHook } from '@testing-library/react-hooks';
import { usePrevious } from './../index';

describe(' Testing a usePrevious Hook ', () => {
  it('Returning a undefined as previous because does not exist previous one', () => {
    const values = [1, 2, 3, 4];

    const { result } = renderHook(() => usePrevious(values));

    expect(result.current).toBeUndefined();
  });

  it('returning a previous value when rerender a page', () => {
    const values = [1, 2, 3, 4];

    const { result, rerender } = renderHook(() => usePrevious(values));

    const nextValues = 5;

    values.push(nextValues);

    rerender(true);

    expect(result.current).toBe(values);
  });
});
