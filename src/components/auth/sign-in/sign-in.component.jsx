import React, { useState } from 'react';
import { CustomButton } from '../../custom-button/custom-button.component';
import FormInput from '../../form-input/form-input.component';
import { Container } from './sign-in.styles';
import { SignInContainer, LinkContainer, Footer } from './sign-in.styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../../redux/user/user.actions';
import { renderErrorMessage } from '../../../utils/helpers';
import axiosInstance from '../../../utils/axios';
import { Redirect } from 'react-router-dom';
import { changeCurrentLoadingStatus } from '../../../redux/loading/loading.action';

const SignIn = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    role: 'buyers',
  });
  const dispatch = useDispatch();
  const [err, setErr] = useState('');
  const [isSucceeded, setIsSucceeded] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  if (currentUser) return <Redirect to="/" />;
  // const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axiosInstance.post('/user/login', values);

    if (response.success) {
      setIsSucceeded(true);
      setTimeout(() => {
        dispatch(changeCurrentLoadingStatus(true));
      }, 1500);
      localStorage.setItem('token', response.data.token);

      setTimeout(() => {
        dispatch(changeCurrentLoadingStatus(false));
        dispatch(setCurrentUser(response.data.user));
      }, 2500);
    } else {
      setErr(response.message);
    }
  };
  return (
    <Container>
      <SignInContainer>
        <h3>Sign In with email and password</h3>
        {err && (
          <div class="alert alert-danger" role="alert">
            {renderErrorMessage(err)}
          </div>
        )}
        {isSucceeded && (
          <div class="alert alert-success" role="alert">
            Sign in successfully
          </div>
        )}
        <form onSubmit={handleSubmit} className="novalidate">
          <FormInput
            name="email"
            type="email"
            handleChange={handleChange}
            label="Email"
            errMessage={err}
            value={values.email}
          />
          <FormInput
            name="password"
            type="password"
            handleChange={handleChange}
            label="Password"
            value={values.password}
          />
          <LinkContainer>
            {/* {loading ? (
            <Loading />
          ) : ( */}
            <CustomButton type="submit" color="blue">
              SIGN IN
            </CustomButton>
            <Link
              to="/auth/resetpassword"
              className="mt-2"
              // component={ResetPassword}
            >
              Forgot Password
            </Link>
            {/* )} */}
          </LinkContainer>
        </form>
        <hr />
        <Footer>
          <Link to="/auth/signup">
            <CustomButton color="green">Create A New Account</CustomButton>
          </Link>
        </Footer>
      </SignInContainer>
    </Container>
  );
};

export default SignIn;
