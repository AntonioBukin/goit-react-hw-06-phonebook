import { useSelector, useDispatch } from 'react-redux';
import css from './filter.module.scss';
import { filterContacts, getFilter } from 'redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const changeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };
  return (
    <label className={css.filterTitle}>
      <input
        className={css.filterInput}
        type="text"
        value={value}
        onChange={changeFilter}
        placeholder="search"
      />
    </label>
  );
};

export default Filter;
