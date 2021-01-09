import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpStart } from 'frontend/redux/auth/actions';
import { SignUpInput } from 'shared/interfaces';
import { signUpSchema } from 'shared/validation';
import { AppState } from 'frontend/redux/root-reducer';
import { PageTitle } from 'frontend/components/common/PageTitle';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import { AuthContainer } from './AuthContainer';
import { ResponseErrors } from './ResponseErrors';
import { ButtonSubmit } from './ButtonSubmit';
import { AuthLink } from './AuthLink';

interface SignUpForm extends SignUpInput {
  password2: string;
}

export const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const { signUpErrors, loading } = useSelector((state: AppState) => state.auth);

  const { register, handleSubmit, errors } = useForm<SignUpForm>({
    resolver: yupResolver(signUpSchema),
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
          margin="dense"
          inputRef={register}
        />
        {errors.firstName?.message && <Alert severity="error">{errors.firstName?.message}</Alert>}

        <TextField
          label="Email Address"
          name="email"
          id="email"
          autoComplete="email"
          fullWidth
          required
          variant="outlined"
          margin="dense"
          inputRef={register}
        />
        {errors.email?.message && <Alert severity="error">{errors.email?.message}</Alert>}

        <TextField
          label="Password"
          name="password"
          id="password"
          autoComplete="new-password"
          fullWidth
          required
          variant="outlined"
          margin="dense"
          inputRef={register}
        />
        {errors.password?.message && <Alert severity="error">{errors.password?.message}</Alert>}

        <TextField
          label="Repeat password"
          name="password2"
          id="password2"
          autoComplete="new-password"
          fullWidth
          required
          variant="outlined"
          margin="dense"
          inputRef={register}
        />
        {errors.password2?.message && <Alert severity="error">{errors.password2?.message}</Alert>}

        <ButtonSubmit loading={loading}>Sign Up</ButtonSubmit>
      </form>
      <AuthLink href="/auth/signin">Already have an account? Sign in</AuthLink>
    </AuthContainer>
  );
};
