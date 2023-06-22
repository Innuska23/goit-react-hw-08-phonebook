const selectFilter = state => state.contacts.filter;

export const selectContacts = state => state.contacts.contacts.items;

export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectError = state => state.contacts.contacts.contacts.error;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);
  return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
};