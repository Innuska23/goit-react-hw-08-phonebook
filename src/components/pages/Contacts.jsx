import AppBar from 'components/AppBar/AppBar';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Labelh1, PagesStyle } from './pages.styled';

export default function Contacts() {
    return (
        <PagesStyle>
            <AppBar />
            <Labelh1>Phonebook</Labelh1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </PagesStyle>
    );
}