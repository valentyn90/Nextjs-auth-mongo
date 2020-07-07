import Head from 'next/head';
import { NextPage } from 'next';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import { signUpStart } from 'redux/auth/actions';
import { SignUpInput } from 'redux/auth/interfaces';
import { signUpSchema } from 'shared/validation';

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.primary};
`;

const SignUpPage: NextPage = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm<SignUpInput>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (signUpInput: SignUpInput) => {
    dispatch(signUpStart(signUpInput));
  };

  return (
    <Container>
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>SignUpPage</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="email" ref={register} />
        <p>{errors.email?.message}</p>

        <input type="text" name="password" ref={register} />
        <p>{errors.password?.message}</p>

        <input type="submit" />
      </form>
    </Container>
  );
};

export default SignUpPage;
