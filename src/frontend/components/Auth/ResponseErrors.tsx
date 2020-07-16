import { SerializedError } from 'backend/errors/custom-error';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';

interface Props {
  errors: SerializedError[];
}

const ResponseErrors: React.FC<Props> = ({ errors }: Props) => {
  return (
    <Box mb={2}>
      {errors.map(({ message }, i) => (
        <Alert key={message + i} severity="error">
          {message}
        </Alert>
      ))}
    </Box>
  );
};

export default ResponseErrors;
