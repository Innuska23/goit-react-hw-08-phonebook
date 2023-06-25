import { nanoid } from '@reduxjs/toolkit';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Flex, Spinner, Text } from '@chakra-ui/react';

import { addContact } from '../redux/operations';
import { selectContacts } from '../redux/selectors';
import { InputField } from 'components/InputField';

const ContactSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required()
    .matches(/^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$/g, 'Should be name'),
  number: yup
    .string()
    .trim()
    .required()
    .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g, 'Should be phone number'),

});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = async ({ name, number }, actions) => {
    if (contacts.find(existContact => existContact.name.toLowerCase() === name.toLowerCase())) {
      await actions.setFieldError('name', `${name} is already in contacts`)
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    await dispatch(addContact(newContact)).unwrap();
    actions.resetForm()
  };

  return (
    <Flex maxWidth='100%' flexDirection='column' alignItems='center' >
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={ContactSchema}
        autoComplete="off"
      >
        {({ isSubmitting, isValidating }) => (<Form>
          <Flex width='600px' flexDirection='column' gap={6}>
            <Text fontSize='2xl'>New phone</Text>

            <InputField
              label="Name"
              placeholder="Please enter your name"
              type="name"
              name="name"
            />

            <InputField
              label="Number"
              placeholder="Please enter your number"
              type="tel"
              name="number"
            />

            <Button width='xs' type='summit' disabled={isSubmitting}>
              {isSubmitting || isValidating ? <Spinner /> : <Text>Add new contact</Text>}
            </Button>
          </Flex>
        </Form>)}
      </Formik>
    </Flex>)
}

export default ContactForm;