// import AppBar from 'components/AppBar/AppBar';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Labelh1, Labelh2, PagesStyle } from './pages.styled';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { selectIsLoading } from '../redux/selectors';

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <PagesStyle>
            {/* <AppBar /> */}
            <Labelh1>Phonebook</Labelh1>
            <ContactForm />
            {isLoading && <p>Loading...</p>}
            <Labelh2>Contacts</Labelh2>
            <Filter />
            <ContactList />
        </PagesStyle>
    );
}
