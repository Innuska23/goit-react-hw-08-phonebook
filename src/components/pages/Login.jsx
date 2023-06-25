
import { useDispatch } from 'react-redux';
import * as yup from 'yup'
import { Form, Formik } from 'formik';
import { InputField } from 'components/InputField';
import { Button, Flex, Text } from '@chakra-ui/react';

import { logIn } from '../redux/auth/AuthOperation';

const SignupSchema = yup.object().shape({
  email: yup.string()
    .email('Invalid email')
    .required('Required'),
  password: yup.string()
    .min(8, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
});

const initialFormValues = {
  email: "", password: "",
}

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = async ({ email, password }) => {
    await dispatch(logIn({ email, password })).unwrap();
  };

  return (
    <Flex maxWidth='100%' flexDirection='column' alignItems='center' >
      <Formik onSubmit={handleSubmit}
        initialValues={initialFormValues}
        validationSchema={SignupSchema} autoComplete="off">
        {({ isSubmitting }) => (<Form>
          <Flex width='600px' flexDirection='column' gap={6}>
            <Text fontSize='2xl'>Page of LogIn</Text>

            <InputField
              label="Email"
              placeholder="Please enter your email"
              type="email"
              name="email"
            />

            <InputField
              label="Password"
              placeholder="Please enter your password"
              type="password"
              name="password"
            />

            <Button width='xs' type='summit' isLoading={isSubmitting} disabled={isSubmitting}>
              <Text>Login</Text>
            </Button>
          </Flex>
        </Form>)}
      </Formik>
    </Flex>
  );
}
