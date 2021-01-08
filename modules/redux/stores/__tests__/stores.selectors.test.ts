import { Store } from '@ilovemochi/enums';
import { MakeTestStore, mockStoreStoreState } from '@test-utils';

import { StoresSelectorEnum } from '../stores.enum';
import * as selectors from '../stores.selectors';

describe('mochi-night selectors', () => {
  const store = MakeTestStore();

  const storeState = mockStoreStoreState({
    [StoresSelectorEnum.Data]: {
      [store[Store.Id]]: { ...store },
    },
  });

  test(selectors.getStore.name, () => {
    const result = selectors.getStore(store[Store.Id])(storeState);
    expect(result).toEqual({ ...store });
  });

  test('getStoreError', () => {
    const result = selectors.getStoreError(storeState as any);
    expect(result).toEqual(false);
  });
});
