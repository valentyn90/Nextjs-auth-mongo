import { SerializedError } from 'backend/errors/custom-error';

export interface SignUpInput {
  email: string;
  password: string;
}

export interface SignInInput {
  email: string;
  password: string;
}

export type Viewer = {
  id: string;
  email: string;
} | null;

export interface Auth {
  viewer: Viewer;
  errors: SerializedError[];
}
