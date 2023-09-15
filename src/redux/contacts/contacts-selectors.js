export const getContacts = store => store.contacts; //selectore це ф-ція яке бере першим аргументом store, а повертає то що потрібно

export const getFilteredContacts = store => {
  const { filter, contacts } = store;
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  return result;
};
