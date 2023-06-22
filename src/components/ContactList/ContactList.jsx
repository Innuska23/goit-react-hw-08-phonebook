import { useSelector } from 'react-redux';
// import { selectContacts, selectFilter } from '../redux/selectors';
import { selectVisibleContacts } from '../redux/selectors';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Button, List, ListItem } from './ContactList.styled';
import { deleteContact } from '../redux/operations';

function ContactList() {
    const dispatch = useDispatch();
    const onDelete = (id) => {
        dispatch(deleteContact(id));
    };

    // const contacts = useSelector(selectContacts);
    // const filter = useSelector(selectFilter);
    // const filterContacts = contacts.filter(({ name }) =>
    //     name.toLowerCase().includes(filter)
    // );
    // eslint-disable-next-line
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

ContactList.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default ContactList;