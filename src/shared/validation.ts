import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().trim().min(4).required(),
});

export const signInSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().trim().required(),
});
