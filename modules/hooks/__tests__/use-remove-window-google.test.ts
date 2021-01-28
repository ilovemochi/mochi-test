import { renderHook } from '@testing-library/react-hooks';
import { useRemoveWindowGoogle } from './../index';

describe('Testing a removeWindowGoogle Hook', () => {
  it('The  window of google is removed', () => {
    const { result } = renderHook(() => useRemoveWindowGoogle());

    expect(result.current).toBeUndefined();
  });
});
