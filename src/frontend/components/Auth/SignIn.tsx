import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInInput } from 'shared/interfaces';
import { signInSchema } from 'shared/validation';
import { signInStart } from 'frontend/redux/auth/actions';
import { AppState } from 'frontend/redux/root-reducer';
import PageTitle from 'frontend/components/common/PageTitle';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import AuthContainer from './AuthContainer';
import ResponseErrors from './ResponseErrors';
import ButtonSubmit from './ButtonSubmit';
import AuthLink from './AuthLink';

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
          autoFocus
          margin="dense"
          inputRef={register}
        />
        {errors.email?.message && <Alert severity="error">{errors.email?.message}</Alert>}

        <TextField
          label="Password"
          name="password"
          id="password"
          autoComplete="current-password"
          fullWidth
          required
          variant="outlined"
          margin="dense"
          inputRef={register}
        />
        {errors.password?.message && <Alert severity="error">{errors.password?.message}</Alert>}

        <ButtonSubmit loading={loading}>Sign In</ButtonSubmit>
      </form>

      <AuthLink href="/auth/signup">{"Don't have an account? Sign Up"}</AuthLink>
    </AuthContainer>
  );
};

export default SignIn;
