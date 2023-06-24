import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/AuthOperation';
import * as yup from 'yup'
import { Button, Flex, Spinner, Text } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { InputField } from 'components/InputField';

const SignupSchema = yup.object().shape({
    name: yup.string().min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: yup.string()
        .email('Invalid email')
        .required('Required'),
    password: yup.string()
        .min(8, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
});

const initialFormValues = {
    email: "", password: "", name: '',
}

export default function Login() {
    const dispatch = useDispatch();

    const handleSubmit = async ({ email, password, name }) => {
        await dispatch(register({ email, password, name })).unwrap();
    };

    return (
        <Flex maxWidth='100%' flexDirection='column' alignItems='center' >
            <Formik onSubmit={handleSubmit}
                initialValues={initialFormValues}
                validationSchema={SignupSchema} autoComplete="off">
                {({ isSubmitting }) => (<Form>
                    <Flex width='600px' flexDirection='column' gap={6}>
                        <Text fontSize='2xl'>Page of registration</Text>

                        <InputField
                            label="Email"
                            placeholder="Please enter your email"
                            type="email"
                            name="email"
                        />

                        <InputField
                            label="Name"
                            placeholder="Please enter your name"
                            type="name"
                            name="name"
                        />

                        <InputField
                            label="Password"
                            placeholder="Please enter your password"
                            type="password"
                            name="password"
                        />

                        <Button width='xs' type='summit' disabled={isSubmitting}>
                            {isSubmitting ? <Spinner /> : <Text>Register</Text>}
                        </Button>
                    </Flex>
                </Form>)}
            </Formik>
        </Flex>
    );
}
