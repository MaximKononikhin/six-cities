import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { sendLogin, setAuthNeed } from '../Store/actions';
import { IAppState, ThunkDispatchType } from '../utils/types';

const LoginPage = () => {
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [isEmailValid, setEmailValidation] = useState(true);
  const [isPasswordValid, setPasswordValidation] = useState(true);
  const dispatch = useDispatch<ThunkDispatchType>();
  const isAuthNeed = useSelector<IAppState, boolean>(state => state.isAuthNeed);

  const validate = (): boolean => {
    let flag = true
    if (userEmail === '' || userEmail.length < 5) {
      setEmailValidation(false);
      flag = false;
    }

    if (userPassword === '' || userPassword.length < 5) {
      setPasswordValidation(false);
      flag = false;
    }
    return flag;
  };

  if (!isAuthNeed) {
    return <Redirect to='/'/>
  }

  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={(evt) => {
              evt.preventDefault();
              if (validate()) {
                dispatch(sendLogin({
                  email: userEmail,
                  password: userPassword
                }));
                dispatch(setAuthNeed(false));
              }
            }}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input style={!isEmailValid? {border: '1px solid red'} : undefined} className="login__input form__input"
                 type="email" name="email" placeholder="Email" required onChange={(evt) => {
                  setEmail(evt.target.value)
                }}/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input style={!isPasswordValid? {border: '1px solid red'} : undefined} className="login__input form__input"
                 type="password" name="password"placeholder="Password" required onChange={(evt) => {
                  setPassword(evt.target.value);
                }}/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>

  )
};

export default LoginPage;