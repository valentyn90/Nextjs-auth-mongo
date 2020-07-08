import * as yup from 'yup';

export const firstNameValidation = yup
  .string()
  .min(2, 'The first name is too short')
  .max(30, 'The first name is too long')
  .required('This field is required');

export const emailValidation = yup
  .string()
  .email('The email is invalid')
  .max(255, 'The email is too long')
  .required('This field is required');

export const passwordValidation = yup
  .string()
  .trim()
  .min(4, 'The password is too short')
  .max(128, 'The password is too long')
  .required('This field is required');

export const signInSchema = yup.object().shape({
  email: emailValidation,
  password: yup.string().required('This field is required'),
});
