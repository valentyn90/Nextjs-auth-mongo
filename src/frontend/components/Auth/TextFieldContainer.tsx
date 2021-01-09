import * as React from 'react';
import Alert from '@material-ui/lab/Alert';

interface Props {
  children: React.ReactNode;
  errorMessage: string | null;
}

export const TextFieldContainer: React.FC<Props> = ({ children, errorMessage }: Props) => {
  return (
    <React.Fragment>
      {children}
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
    </React.Fragment>
  );
};
