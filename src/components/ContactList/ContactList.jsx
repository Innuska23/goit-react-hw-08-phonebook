import { useSelector, useDispatch } from 'react-redux';
import { OrderedList } from '@chakra-ui/react';

import { selectVisibleContacts } from '../redux/selectors';
import { deleteContact } from '../redux/operations';
import ContactListItem from './ContactListItem';

function ContactList() {
    const dispatch = useDispatch();
    const visibleContacts = useSelector(selectVisibleContacts);

    const handleDeleteItem = async (id) => {
        await dispatch(deleteContact(id)).unwrap();
    };

    return (
        <OrderedList>
            {visibleContacts.map((item) => (
                <ContactListItem key={item.id} item={item} onDelete={handleDeleteItem} />
            ))}
        </OrderedList>
    );
}

export default ContactList;