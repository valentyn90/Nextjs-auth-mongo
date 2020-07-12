import { Container } from '@material-ui/core';

interface Props {
  children: NonNullable<React.ReactNode>;
}

const AuthContainer: React.FC<Props> = ({ children }: Props) => {
  return <Container maxWidth="sm">{children}</Container>;
};

export default AuthContainer;
