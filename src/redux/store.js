import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './root-reducer';

const persistConfig = {
  key: 'root', //це ключ під якім будемо записувати у localStorage
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// import contactsReducer from './contacts/contacts-slice';
// import filterReducer from './filter/filter-slice';

// import { createStore } from 'redux';

// import rootReducer from './root-reducer';

// //створюємо store
// const store = createStore(rootReducer);

// //console.log(store.dispatch);

// export default store;
