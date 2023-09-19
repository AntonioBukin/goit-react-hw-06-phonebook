import { useSelector, useDispatch } from 'react-redux';

import MyPhoneBlock from './components/MyPhoneBlock/MyPhoneBlock';
import MyPhoneList from './components/MyPhoneList/MyPhoneList';
import MyPhoneForm from './components/MyPhoneForm/MyPhoneForm';

import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';

import {
  getContacts,
  getFilteredContacts,
} from './redux/contacts/contacts-selectors';

import { getFilteredPhone } from './redux/filter/filter-selectors';

import styles from './index.module.scss';
import './shared/styles/styles.scss';

//Redux - за для створення глобального стану
//React-redux - щоб створити можливість доступу усім компонентам додату до глобального стану. Бібліотека допомогає
//збирати данні з глоб.стану так і зминувати їх.

const MyPhone = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilteredPhone);

  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  }; //ф-ція яка записує target.value у фільтр

  const onAddPhone = ({ name, number }) => {
    if (isDublicate({ name, number })) {
      return alert(`${name} - ${number} is alredy in contacts`);
    }
    dispatch(addContact({ name, number }));
  };

  const isDublicate = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();

    const dublicate = contacts.find(contact => {
      return (
        contact.name.toLowerCase() === normalizedName &&
        contact.number.toLowerCase() === normalizedNumber
      );
    });

    return Boolean(dublicate);
  };

  const onDeletePhone = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <h3 className={styles.title}>My Phone</h3>
        <div className={styles.blocks}>
          <MyPhoneBlock title="">
            <MyPhoneForm onSubmit={onAddPhone} />
          </MyPhoneBlock>
          <MyPhoneBlock title="Find contacts by name">
            <input
              value={filter}
              name="filter"
              onChange={handleFilter}
              className={styles.textField}
              placeholder="enter number"
            />
            <MyPhoneList
              contacts={filteredContacts}
              onDeletePhone={onDeletePhone}
            />
          </MyPhoneBlock>
        </div>
      </div>
    </div>
  );
};

export default MyPhone;
