import { TiUserDeleteOutline } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import css from './my-contact-list.module.scss';
import { getContacts, getFilter, removeContact } from 'redux/contactsSlice';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <ul className={css.contacts}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contacts__item}>
          <p className={css.contacts__data}>
            <span>
              {name}: {number}
            </span>
            <button
              type="button"
              className={css.btnDel}
              onClick={() => dispatch(removeContact(id))}
            >
              Delete
              <TiUserDeleteOutline size="16" className={css.icon} />
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
