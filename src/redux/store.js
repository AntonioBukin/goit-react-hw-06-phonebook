import { createStore } from 'redux';

import reducer from './reducer';


//створюємо store
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.dispatch);

export default store;
