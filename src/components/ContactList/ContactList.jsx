import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../redux/selectors';
import { selectVisibleContacts } from '../redux/selectors';
import { useDispatch } from 'react-redux';

import { Button, List, ListItem } from './ContactList.styled';
import { deleteContact } from '../redux/operations';

function ContactList() {
    const dispatch = useDispatch();
    const onDelete = (id) => {
        dispatch(deleteContact(id));
    };

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const filterContacts = contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter)
    );
    // eslint-disable-next-line
    const visibleContacts = useSelector(selectVisibleContacts);

    return (
        <List>
            {filterContacts.map(({ id, name, number }, idx) => (
                <ListItem key={id}>
                    <span>{idx + 1}. {name}: {number} </span>
                    <Button onClick={() => onDelete(id)}>delete</Button>
                </ListItem>
            ))}
        </List>
    );
}

export default ContactList;