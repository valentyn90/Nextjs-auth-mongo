import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { signUpStart } from 'redux/auth/actions';
import { SignUpInput } from 'shared/interfaces';
import { firstNameValidation, emailValidation, passwordValidation } from 'shared/validation';
import ResponseErrors from 'components/common/ResponseErrors';

import { AppState } from 'redux/root-reducer';
import PageTitle from 'components/common/PageTitle';

interface SignUpForm extends SignUpInput {
  password2: string;
}

const validationSchema = yup.object().shape({
  firstName: firstNameValidation,
  email: emailValidation,
  password: passwordValidation,
  password2: yup
    .string()
    .trim()
    .when('password', {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref('password')], 'Both passwords must be the same'),
    }),
});

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const { signUpErrors, loading } = useSelector((state: AppState) => state.auth);

  const { register, handleSubmit, errors } = useForm<SignUpForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (signUpForm: SignUpForm) => {
    dispatch(signUpStart(signUpForm));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PageTitle>Sign Up</PageTitle>
      <ResponseErrors errors={signUpErrors} />
      <div>
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            name="firstName"
            id="firstName"
            autoComplete="username"
            ref={register}
          />
        </label>
        <p>{errors.firstName?.message}</p>
      </div>

      <div>
        <label htmlFor="email">
          Email
          <input type="email" name="email" id="email" autoComplete="email" ref={register} />
        </label>
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="new-password"
            ref={register}
          />
        </label>
        <p>{errors.password?.message}</p>
      </div>

      <div>
        <label htmlFor="password2">
          Repeat password
          <input
            type="password"
            name="password2"
            id="password2"
            autoComplete="new-password"
            ref={register}
          />
        </label>
        <p>{errors.password2?.message}</p>
      </div>

      <button type="submit">{loading ? 'Loading...' : 'Submit'}</button>
    </form>
  );
};

export default SignUp;
