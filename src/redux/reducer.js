import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './types';

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
  filter: '', //масив контактів
};

//створюємо ф-цію reducer (rootReducer) - яка створює начальне значення глоб.стану і потім можна його
//зминювати
const reducer = (state = initialState, action) => {
  //console.log(action);
  switch (
    action.type //action.type - ми перевіряємо що від нас хочуть
  ) {
    case ADD_CONTACT:
      const newContacts = [...state.contacts, action.payload]; //newContacts усі старі контакти + нові
      return { ...state, contacts: newContacts }; //розпилюємо state (contacts та filter) і в властивості contacts будуть newContacts нові контакти
    case DELETE_CONTACT:
      const arr = state.contacts.filter(item => item.id !== action.payload);
      return { ...state, contacts: arr };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default reducer;
