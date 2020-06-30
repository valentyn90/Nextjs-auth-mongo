import { ValidationError } from 'yup';
import { CustomError, SerializedError } from './custom-error';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError) {
    super('Invalid request parameters');

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors(): SerializedError[] {
    return this.errors.inner.map((error) => ({
      message: error.message,
      field: error.path,
    }));
  }
}
