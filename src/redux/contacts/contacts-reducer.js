import { ADD_CONTACT, DELETE_CONTACT } from './contacts-types';

const initialState = [
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
];

//створюємо ф-цію reducer (rootReducer) - яка створює начальне значення глоб.стану і потім можна його
//зминювати
const contactsReducer = (state = initialState, {type, payload}) => {
  //console.log(action);
  switch (
    type //action.type - ми перевіряємо що від нас хочуть
  ) {
    case ADD_CONTACT:
      return [...state, payload]; //усі старі контакти + нові
     //розпилюємо state (contacts та filter) і в властивості contacts будуть newContacts нові контакти
    case DELETE_CONTACT:
      return state.filter(item => item.id !== payload);
    default:
      return state;
  }
};

export default contactsReducer;
