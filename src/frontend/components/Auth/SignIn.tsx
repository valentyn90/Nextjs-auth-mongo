import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInInput } from 'shared/interfaces';
import { signInSchema } from 'shared/validation';
import { PageTitle } from 'frontend/components/common/PageTitle';
import TextField from '@material-ui/core/TextField';
import { AuthContainer } from './AuthContainer';
import { ResponseErrors } from './ResponseErrors';
import { ButtonSubmit } from './ButtonSubmit';
import { AuthLink } from './AuthLink';
import { useSignIn } from './hooks/useSignIn';
import { TextFieldContainer } from './TextFieldContainer';
import { routes } from 'frontend/routes';

export const SignIn: React.FC = () => {
  const { signInErrors, loading, onSubmit } = useSignIn();

  const { register, handleSubmit, errors } = useForm<SignInInput>({
    resolver: yupResolver(signInSchema),
  });

  return (
    <AuthContainer>
      <PageTitle>Sign In</PageTitle>
      <ResponseErrors errors={signInErrors} />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextFieldContainer errorMessage={errors.email?.message ?? null}>
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
        </TextFieldContainer>

        <TextFieldContainer errorMessage={errors.password?.message ?? null}>
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
        </TextFieldContainer>

        <ButtonSubmit loading={loading}>Sign In</ButtonSubmit>
      </form>

      <AuthLink href={routes.authSignup}>{"Don't have an account? Sign Up"}</AuthLink>
    </AuthContainer>
  );
};
