import { SerializedError } from 'backend/errors/custom-error';

export interface SignUpInput {
  email: string;
  password: string;
}

export interface SignInInput {
  email: string;
  password: string;
}

export interface Viewer {
  id: string;
  email: string;
}

export interface Auth {
  viewer: Viewer | null;
  errors: SerializedError[];
}
