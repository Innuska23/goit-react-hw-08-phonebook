import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/AuthOperation';
import { ButtonAuth, FormRegister, InputAuth, LabelAuth, PagesStyle, TitleAuth } from './pages.styled';

export default function RegistrationForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <PagesStyle>
            <TitleAuth>Page of registration</TitleAuth>


            <FormRegister onSubmit={handleSubmit} autoComplete="off">
                <LabelAuth>
                    Name
                </LabelAuth>
                <InputAuth type="text" name="name" value={name} onChange={handleChange} autoComplete="off" />


                <LabelAuth>
                    Email
                </LabelAuth>
                <InputAuth
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    autoComplete=""
                />

                <LabelAuth>
                    Password
                </LabelAuth>
                <InputAuth
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    autoComplete="off"
                />

                <ButtonAuth type="submit">Register</ButtonAuth>
            </FormRegister>
        </PagesStyle>
    );
}