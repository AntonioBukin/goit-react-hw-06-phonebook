import { createStore } from 'redux';

import rootReducer from './root-reducer';

//створюємо store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//console.log(store.dispatch);

export default store;
