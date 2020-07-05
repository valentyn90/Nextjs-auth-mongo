import { SerializedError } from 'backend/errors/custom-error';

export interface SignUpInput {
  name: string;
  email: string;
  password: string;
}

export interface SignInInput {
  email: string;
  password: string;
}

export interface Viewer {
  id: string;
  name: string;
  email: string;
}

export interface Auth {
  viewer: Viewer | null;
  errors: SerializedError[];
}
