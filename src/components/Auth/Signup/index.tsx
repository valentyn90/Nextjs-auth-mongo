import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { signUpStart } from 'redux/auth/actions';
import { SignUpInput } from 'shared/interfaces';
import { firstNameValidation, emailValidation, passwordValidation } from 'shared/validation';
import { PageTitle, TextInput, InputBox, ErrorPara } from 'styled/styles';
import ResponseErrors from 'components/common/ResponseErrors';

import { AppState } from 'redux/root-reducer';

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
  const { signUpErrors } = useSelector((state: AppState) => state.auth);

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
      <InputBox>
        <label htmlFor="firstName">
          First Name
          <TextInput
            type="text"
            name="firstName"
            id="firstName"
            autoComplete="username"
            ref={register}
          />
        </label>
        <ErrorPara>{errors.firstName?.message}</ErrorPara>
      </InputBox>

      <InputBox>
        <label htmlFor="email">
          Email
          <TextInput type="email" name="email" id="email" autoComplete="email" ref={register} />
        </label>
        <ErrorPara>{errors.email?.message}</ErrorPara>
      </InputBox>

      <InputBox>
        <label htmlFor="password">
          Password
          <TextInput
            type="password"
            name="password"
            id="password"
            autoComplete="new-password"
            ref={register}
          />
        </label>
        <ErrorPara>{errors.password?.message}</ErrorPara>
      </InputBox>

      <InputBox>
        <label htmlFor="password2">
          Repeat password
          <TextInput
            type="password"
            name="password2"
            id="password2"
            autoComplete="new-password"
            ref={register}
          />
        </label>
        <ErrorPara>{errors.password2?.message}</ErrorPara>
      </InputBox>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;
