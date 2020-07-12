import * as yup from 'yup';

export const firstNameValidation = yup
  .string()
  .required('First name is required')
  .min(2, 'The first name is too short')
  .max(30, 'The first name is too long');

export const emailValidation = yup
  .string()
  .required('Email address is required')
  .email('The email is invalid')
  .max(255, 'The email is too long');

export const passwordValidation = yup
  .string()
  .trim()
  .required('Password is required')
  .min(4, 'The password is too short')
  .max(128, 'The password is too long');

export const signInSchema = yup.object().shape({
  email: emailValidation,
  password: yup.string().trim().required('Password is required'),
});
