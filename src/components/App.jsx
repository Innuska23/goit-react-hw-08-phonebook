import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from './ContactList/ContactList';
import { Container, MessageText } from "./App.styled";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../components/redux/operations';
import { selectError, selectIsLoading } from '../components/redux/selectors';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <MessageText>Loading...</MessageText>}
      {error && <MessageText>Error: {error}</MessageText>}
      <ContactList />
    </Container>
  );
}

export default App;