import { renderHook, cleanup } from '@testing-library/react-hooks';

import useRemoveWindowGoogle from './use-remove-window-google';

describe('useRemoveWindowGoogle hooks', () => {
  const { result } = renderHook(() => useRemoveWindowGoogle());

  beforeEach(cleanup);

  it('window.google.maps should not be set', () => {
    expect(window.google.maps).toEqual({});
  });
});
