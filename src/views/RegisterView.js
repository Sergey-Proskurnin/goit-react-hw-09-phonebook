import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { register } from 'redux/auth';
import RegisterComponent from 'components/RegisterComponent';

import s from './Views.module.css';
import sAr from 'helpers/animation/animationRight.module.css';

const RegisterView = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();
  const onRegister = s => dispatch(register(s));

  const handleChange = ({ target: { name, value } }) => {
    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onRegister(state);
    setState(prev => ({
      ...prev,
      name: '',
      email: '',
      password: '',
    }));
  };

  const { name, email, password } = state;
  return (
    <div className={s.RegisterContainer}>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={sAr}
        unmountOnExit
      >
        <RegisterComponent
          handleChange={handleChange}
          name={name}
          email={email}
          password={password}
          handleSubmit={handleSubmit}
        />
      </CSSTransition>
    </div>
  );
};
export default RegisterView;
