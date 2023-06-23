import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/AuthOperation';
import { ButtonAuth, FormRegister, InputAuth, LabelAuth, PagesStyle, TitleAuth } from './pages.styled';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <PagesStyle>
      <TitleAuth>Page of LogIn</TitleAuth>

      <FormRegister onSubmit={handleSubmit} autoComplete="off">
        <LabelAuth>
          Email
        </LabelAuth>
        <InputAuth
          label="Email"
          helperText="Please enter your email"
          focused
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <LabelAuth >
          Password
        </LabelAuth>
        <InputAuth
          label="Password"
          focused
          helperText="Please enter your password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <ButtonAuth type='summit'>
          LogIn
        </ButtonAuth>
      </FormRegister>
    </PagesStyle>
  );
}