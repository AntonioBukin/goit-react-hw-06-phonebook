import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;

// import { createStore } from 'redux';

// import rootReducer from './root-reducer';

// //створюємо store
// const store = createStore(rootReducer);

// //console.log(store.dispatch);

// export default store;
