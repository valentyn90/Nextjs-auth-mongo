import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpForm } from 'shared/interfaces';
import { signUpSchema } from 'shared/validation';
import { PageTitle } from 'frontend/components/common/PageTitle';
import TextField from '@material-ui/core/TextField';
import { AuthContainer } from './AuthContainer';
import { ResponseErrors } from './ResponseErrors';
import { ButtonSubmit } from './ButtonSubmit';
import { AuthLink } from './AuthLink';
import { useSignUp } from './hooks/useSignUp';
import { TextFieldContainer } from './TextFieldContainer';
import { routes } from 'frontend/routes';

export const SignUp: React.FC = () => {
  const { signUpErrors, loading, onSubmit } = useSignUp();

  const { register, handleSubmit, errors } = useForm<SignUpForm>({
    resolver: yupResolver(signUpSchema),
  });

  return (
    <AuthContainer>
      <PageTitle>Sign Up</PageTitle>
      <ResponseErrors errors={signUpErrors} />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextFieldContainer errorMessage={errors.firstName?.message ?? null}>
          <TextField
            label="First Name"
            name="firstName"
            id="firstName"
            autoComplete="given-name"
            fullWidth
            required
            variant="outlined"
            autoFocus
            margin="dense"
            inputRef={register}
          />
        </TextFieldContainer>

        <TextFieldContainer errorMessage={errors.email?.message ?? null}>
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
        </TextFieldContainer>

        <TextFieldContainer errorMessage={errors.password?.message ?? null}>
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
        </TextFieldContainer>

        <TextFieldContainer errorMessage={errors.password2?.message ?? null}>
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
        </TextFieldContainer>

        <ButtonSubmit loading={loading}>Sign Up</ButtonSubmit>
      </form>
      <AuthLink href={routes.authSignin}>Already have an account? Sign in</AuthLink>
    </AuthContainer>
  );
};
