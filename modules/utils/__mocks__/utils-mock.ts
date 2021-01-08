export const LocalStorageMock: any = () => {
  const store = {};
  return {
    getItem: jest.fn().mockImplementation((id: string) => store[id]),
    removeItem: jest.fn().mockImplementation((id: string) => delete store[id]),
    setItem: jest.fn().mockImplementation((id: string, data: string) => {
      store[id] = data;
    }),
  };
};

const sessionStore = new Map();

export const SessionStorageMock: any = () => ({
  setItem: (key, value) => {
    sessionStore.set(key, value);
    return true;
  },
  getItem(key) {
    return sessionStore.get(key);
  },
});
