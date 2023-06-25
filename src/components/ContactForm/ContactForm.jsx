import { nanoid } from '@reduxjs/toolkit';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Flex, Text } from '@chakra-ui/react';

import { addContact } from '../redux/operations';
import { selectContacts } from '../redux/selectors';
import { InputField } from 'components/InputField';
import { useMemo } from 'react';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const validation = useMemo(() => yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$/g, 'Should be name')
      .test(
        '',
        ({ value }) => `${value} is already in contacts`,
        (value) => {
          return !contacts.find(existContact => existContact.name.toLowerCase() === value.toLowerCase())
        })
      .required(),
    number: yup
      .string()
      .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g, 'Should be phone number')
      .test('',
        ({ value }) => `${value} is already in contacts`,
        (value) => {
          return !contacts.find(existContact => existContact.number.toLowerCase() === value.toLowerCase())
        })
      .required(),

  }), [contacts])

  const handleSubmit = async ({ name, number }, actions) => {
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
        validationSchema={validation}
      >
        {({ isSubmitting, isValidating }) => (<Form>
          <Flex width='600px' flexDirection='column' gap={6}>
            <Text fontSize='2xl'>New phone</Text>

            <InputField
              id="name"
              label="Name"
              placeholder="Please enter your name"
              type="name"
              name="name"
            />

            <InputField
              id="number"
              label="Number"
              placeholder="Please enter your number"
              type="tel"
              name="number"
            />

            <Button
              width='xs'
              type="submit"
              disabled={isSubmitting}
              isLoading={isSubmitting}>
              <Text>Add new contact</Text>
            </Button>
          </Flex>
        </Form>)}
      </Formik>
    </Flex>)
}

export default ContactForm;