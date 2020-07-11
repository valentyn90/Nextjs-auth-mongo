import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import { SignInInput } from 'shared/interfaces';
import { signInSchema } from 'shared/validation';
import { signInStart } from 'redux/auth/actions';
import { AppState } from 'redux/root-reducer';
import PageTitle from 'components/common/PageTitle';
import { TextField, Button } from '@material-ui/core';
import ErrorMessage from './ErrorMessage';
import AuthContainer from './AuthContainer';
import ResponseErrors from './ResponseErrors';

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
    <AuthContainer>
      <PageTitle>Sign In</PageTitle>
      <ResponseErrors errors={signInErrors} />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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

        <Button type="submit" fullWidth variant="contained" color="secondary">
          {loading ? 'Loading...' : 'Sign In'}
        </Button>
      </form>
    </AuthContainer>
  );
};

export default SignIn;
