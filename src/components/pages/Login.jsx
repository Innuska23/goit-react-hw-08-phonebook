import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/AuthOperation';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 50,
  },
};

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
    <div>
      <h1>Page of LogIn</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          <input
            label="Email"
            helperText="Please enter your email"
            focused
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label >
          <input
            label="Password"
            focused
            helperText="Please enter your password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        {/* <MUI.Button variant="contained" type="submit" color="success">
          LogIn
        </MUI.Button> */}
      </form>
    </div>
  );
}