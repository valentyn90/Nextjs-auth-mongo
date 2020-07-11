import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { TextField, Button } from '@material-ui/core';

import { signUpStart } from 'redux/auth/actions';
import { SignUpInput } from 'shared/interfaces';
import { firstNameValidation, emailValidation, passwordValidation } from 'shared/validation';
import { AppState } from 'redux/root-reducer';
import PageTitle from 'components/common/PageTitle';
import ErrorMessage from './ErrorMessage';
import AuthContainer from './AuthContainer';
import ResponseErrors from './ResponseErrors';

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
    <AuthContainer>
      <PageTitle>Sign Up</PageTitle>
      <ResponseErrors errors={signUpErrors} />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          label="First Name"
          name="firstName"
          id="firstName"
          autoComplete="fname"
          fullWidth
          required
          variant="outlined"
          autoFocus
          inputRef={register}
        />
        <ErrorMessage>{errors.firstName?.message}</ErrorMessage>

        <TextField
          label="Email Address"
          name="email"
          id="email"
          autoComplete="email"
          fullWidth
          required
          variant="outlined"
          inputRef={register}
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>

        <TextField
          label="Password"
          name="password"
          id="password"
          autoComplete="new-password"
          fullWidth
          required
          variant="outlined"
          inputRef={register}
        />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>

        <TextField
          label="Repeat password"
          name="password2"
          id="password2"
          autoComplete="new-password"
          fullWidth
          required
          variant="outlined"
          inputRef={register}
        />
        <ErrorMessage>{errors.password2?.message}</ErrorMessage>

        <Button type="submit" fullWidth variant="contained" color="secondary">
          {loading ? 'Loading...' : 'Sign Up'}
        </Button>
      </form>
    </AuthContainer>
  );
};

export default SignUp;
