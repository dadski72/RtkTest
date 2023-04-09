import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {testApi} from './testApi';

export const store = configureStore({
  reducer: {
    [testApi.reducerPath]: testApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testApi.middleware),
});
setupListeners(store.dispatch);
