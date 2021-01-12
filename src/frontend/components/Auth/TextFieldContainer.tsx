import Alert from '@material-ui/lab/Alert';
import { Fragment } from 'react';

interface Props {
  children: React.ReactNode;
  errorMessage: string | null;
}

export const TextFieldContainer: React.FC<Props> = ({ children, errorMessage }: Props) => {
  return (
    <Fragment>
      {children}
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
    </Fragment>
  );
};
