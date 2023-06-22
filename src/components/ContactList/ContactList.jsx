import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../redux/selectors';
import { useDispatch } from 'react-redux';

import { Button, List, ListItem } from './ContactList.styled';
import { deleteContact } from '../redux/operations';


function ContactList() {
    const dispatch = useDispatch();
    const onDelete = (id) => {
        dispatch(deleteContact(id));
    };

    const visibleContacts = useSelector(selectVisibleContacts);
    return (
        <List>
            {visibleContacts.map(({ id, name, number }, idx) => (
                <ListItem key={id}>
                    <span>{idx + 1}. {name}: {number} </span>
                    <Button onClick={() => onDelete(id)}>delete</Button>
                </ListItem>
            ))}
        </List>
    );
}

export default ContactList;