import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { signUpStart } from 'redux/auth/actions';
import { SignUpInput } from 'shared/interfaces';
import { firstNameValidation, emailValidation, passwordValidation } from 'shared/validation';

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

  const { register, handleSubmit, errors } = useForm<SignUpForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (signUpForm: SignUpForm) => {
    dispatch(signUpStart(signUpForm));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="firstName" ref={register} />
      <p>{errors.firstName?.message}</p>

      <input type="text" name="email" ref={register} />
      <p>{errors.email?.message}</p>

      <input type="text" name="password" ref={register} />
      <p>{errors.password?.message}</p>

      <input type="text" name="password2" ref={register} />
      <p>{errors.password2?.message}</p>

      <input type="submit" />
    </form>
  );
};

export default SignUp;
