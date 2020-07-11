import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import { SignInInput } from 'shared/interfaces';
import { signInSchema } from 'shared/validation';
import { signInStart } from 'redux/auth/actions';
import ResponseErrors from 'components/common/ResponseErrors';
import { AppState } from 'redux/root-reducer';
import PageTitle from 'components/common/PageTitle';

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
            autoComplete="password"
            ref={register}
          />
        </label>
        <p>{errors.password?.message}</p>
      </div>

      <button type="submit">{loading ? 'Loading...' : 'Submit'}</button>
    </form>
  );
};

export default SignIn;
