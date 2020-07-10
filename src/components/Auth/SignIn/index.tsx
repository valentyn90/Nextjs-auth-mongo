import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import { SignInInput } from 'shared/interfaces';
import { signInSchema } from 'shared/validation';
import { signInStart } from 'redux/auth/actions';
import { PageTitle, TextInput, InputBox, ErrorPara } from 'styled/styles';
import ResponseErrors from 'components/common/ResponseErrors';
import { AppState } from 'redux/root-reducer';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const { signInErrors, loading } = useSelector((state: AppState) => state.auth);

  const { register, handleSubmit, errors } = useForm<SignInInput>({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = (signInInput: SignInInput) => {
    dispatch(signInStart(signInInput));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PageTitle>Sign In</PageTitle>
      <ResponseErrors errors={signInErrors} />
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
            autoComplete="password"
            ref={register}
          />
        </label>
        <ErrorPara>{errors.password?.message}</ErrorPara>
      </InputBox>

      <button type="submit">{loading ? 'Loading...' : 'Submit'}</button>
    </form>
  );
};

export default SignIn;
