import React from 'react';

import { SerializedError } from 'backend/errors/custom-error';
import { ErrorPara } from 'styled/styles';
import * as Styled from './styles';

interface Props {
  errors: SerializedError[];
}

const ResponseErrors: React.FC<Props> = ({ errors }: Props) => {
  return (
    <Styled.ErrorsContainer>
      {errors.map(({ field, message }) => (
        <ErrorPara key={field + message}>
          <span>{field}</span>
          <span>{message}</span>
        </ErrorPara>
      ))}
    </Styled.ErrorsContainer>
  );
};

export default ResponseErrors;
