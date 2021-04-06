import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import withAuthFirebase from '@/shared/components/auth/withAuthFirebase';
import { useAuth0 } from '@/shared/components/auth/withAuth0';
import Loading from '@/shared/components/Loading';
import LogInForm from '@/shared/components/loginForm/LogInForm';
import GoogleAuthBtn from '../AuthBtn/googleAuthBtn';
import FacebookAuthBtn from '../AuthBtn/fbAuthBtn';

const LogIn = ({ changeIsOpenModalFireBase }) => {
  const [error, setError] = useState({});

  const {
    loginWithRedirect, loading,
  } = useAuth0();
  if (loading) {
    return (<Loading loading={loading} />);
  }
  const onSubmit = (e, info) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/user/login', info)
      .then((response) => {
        window.localStorage.setItem('KPI_token', response.data.token);
        window.location.href = '/dashboard';
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };
  return (
    <div className="account account--not-photo">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__head">
            <h3 className="account__title">Welcome to
              <span className="account__logo"> Easy
                <span className="account__logo-accent">DEV</span>
              </span>
            </h3>
            <h4 className="account__subhead subhead">Start your business easily</h4>
          </div>


          <div className="form__form-group">

            {
              error.message
                ? <p className="text-danger"> {error.message} </p> : ''
            }
            {
              error.email
                ? <p className="text-danger"> {error.email} </p> : ''
            }

            {
              error.password
                ? <p className="text-danger"> {error.password} </p> : ''
            }
          </div>
          <LogInForm
            handleSubmit={onSubmit}
            error={error}
            form="log_in_form"
          />
          <div className="account__or">
            <p>Or Easily Using</p>
          </div>
          <div className="account__social">
            <FacebookAuthBtn />
            <GoogleAuthBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

LogIn.propTypes = {
  changeIsOpenModalFireBase: PropTypes.func.isRequired,
};

export default withAuthFirebase(LogIn);
