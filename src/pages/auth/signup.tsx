import Head from 'next/head';
import { Fragment } from 'react';
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import { signUpStart } from 'redux/auth/actions';
import { SignUpInput } from 'redux/auth/interfaces';
import { signUpSchema } from 'shared/validation';

const SignUpPage: NextPage = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm<SignUpInput>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (signUpInput: SignUpInput) => {
    dispatch(signUpStart(signUpInput));
  };

  return (
    <Fragment>
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="email" ref={register} />
        <p>{errors.email?.message}</p>

        <input type="text" name="password" ref={register} />
        <p>{errors.password?.message}</p>

        <input type="submit" />
      </form>
    </Fragment>
  );
};

export default SignUpPage;
