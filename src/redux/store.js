import { createStore } from 'redux';

//створюємо ф-цію reducer (rootReducer) - яка створює начальне значення глоб.стану і потім можна його
//зминювати

const initialState = {
    contacts: [
        {
          id: '1',
          name: 'Peter',
          number: '556-91-26',
        },
        {
          id: '2',
          name: 'John',
          number: '557-90-27',
        },
        {
          id: '3',
          name: 'Jekh',
          number: '547-38-32',
        },
      ],
      filter: "" //масив контактів
}

const reducer = (state = initialState) => {
  return state;
};

//створюємо store
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
