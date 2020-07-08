import { SerializedError } from 'backend/errors/custom-error';

export interface ErrorResponse {
  errors: SerializedError[];
}

export interface SignUpInput {
  firstName: string;
  email: string;
  password: string;
}

export interface SignInInput {
  firstName: string;
  email: string;
  password: string;
}

export interface Viewer {
  id: string;
  firstName: string;
  email: string;
}
