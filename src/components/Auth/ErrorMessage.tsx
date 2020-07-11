import { Typography } from '@material-ui/core';

interface Props {
  children: React.ReactNode;
}

const ErrorMessage: React.FC<Props> = ({ children }: Props) => {
  return (
    <Typography variant="caption" component="p" color="error" gutterBottom>
      {children}
    </Typography>
  );
};

export default ErrorMessage;
