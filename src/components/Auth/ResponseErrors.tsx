import { SerializedError } from 'backend/errors/custom-error';
import { Typography, Box } from '@material-ui/core';
import ErrorMessage from './ErrorMessage';

interface Props {
  errors: SerializedError[];
}

const ResponseErrors: React.FC<Props> = ({ errors }: Props) => {
  return (
    <Box mb={2}>
      {errors.map(({ field, message }) => (
        <ErrorMessage key={field + message}>
          {field && <Typography component="span">{field} field:&nbsp;</Typography>}
          <Typography component="span">{message}</Typography>
        </ErrorMessage>
      ))}
    </Box>
  );
};

export default ResponseErrors;
