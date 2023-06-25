export const selectFilter = state => state.filters;

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);

  return filter ? contacts.filter(({ name }) => name.toLowerCase().includes(filter)) : contacts;
};