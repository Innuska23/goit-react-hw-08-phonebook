import { nanoid } from '@reduxjs/toolkit';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormContact, Error, InputForm, LabelForm, ButtonForm } from './ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/operations';
import { selectContacts } from '../redux/selectors';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

const initialValues = {
  name: '',
  number: '',
};

const nameInputId = nanoid();
const numberInputId = nanoid();

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = (e, { resetForm }) => {

    const name = e.name.trim();
    if (contacts.find(el => el.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      resetForm();
      return;
    }
    const number = e.number;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormContact autoComplete="off">
        <LabelForm htmlFor={nameInputId}>
          Name
        </LabelForm>
        <InputForm
          id={nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Error name="name" component="div" />

        <LabelForm htmlFor={numberInputId}>
          <span>Number</span>
        </LabelForm>
        <InputForm
          id={numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Error name="number" component="div" />

        <ButtonForm type="submit">Add contact</ButtonForm>
      </FormContact>
    </Formik>
  );
}

export default ContactForm;