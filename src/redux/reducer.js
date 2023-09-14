import {ADD_CONTACT} from "./types";

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

//створюємо ф-цію reducer (rootReducer) - яка створює начальне значення глоб.стану і потім можна його
//зминювати
const reducer = (state = initialState, action) => {
    switch(action.type) { //action.type - ми перевіряємо що від нас хочуть
        case "contacts/add" :

    }
  return state;
};

export default reducer;