import React from 'react';

import { SerializedError } from 'backend/errors/custom-error';

interface Props {
  errors: SerializedError[];
}

const ResponseErrors: React.FC<Props> = ({ errors }: Props) => {
  return (
    <div>
      {errors.map(({ field, message }) => (
        <p key={field + message}>
          <span>{field}</span>
          <span>{message}</span>
        </p>
      ))}
    </div>
  );
};

export default ResponseErrors;
