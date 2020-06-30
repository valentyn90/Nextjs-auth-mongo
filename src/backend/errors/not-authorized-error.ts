import { CustomError, SerializedError } from './custom-error';

export class NotAuthorizedError extends CustomError {
  statusCode = 401;
  constructor() {
    super('Not Authorized');
    // Only because we are extending a built in class
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors(): SerializedError[] {
    return [{ message: 'Not authorized' }];
  }
}
