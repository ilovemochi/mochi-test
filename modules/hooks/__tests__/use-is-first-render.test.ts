import { renderHook, act } from '@testing-library/react-hooks';
import { useIsFirstRender } from './../index';

describe('Test if it is a first render', () => {
  it('Is it a first render', () => {
    const { result, rerender } = renderHook(useIsFirstRender);

    act(() => {
      result.current;
    });

    expect(result.current).toBe(true);
  });

  it('It is not a first render', () => {
    const { result, rerender } = renderHook(useIsFirstRender);

    act(() => {
      result.current;
    });

    rerender(true);

    expect(result.current).not.toBeTruthy();
  });
});
