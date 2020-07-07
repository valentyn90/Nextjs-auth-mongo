import { SerializedError } from 'backend/errors/custom-error';

export interface ErrorResponse {
  errors: SerializedError[];
}
