import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { selectIsLoading } from '../redux/selectors';
import { Box, Spinner, Text } from '@chakra-ui/react';

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);


    return (
        <Box width='100%'>
            <Text fontSize='4xl' fontWeight='bold'>Phonebook</Text>

            <ContactForm />

            <Text fontSize='4xl' marginTop={12} >Contacts</Text>

            <Filter />

            {isLoading ? <Spinner /> : <ContactList />}
        </Box>
    );
}
