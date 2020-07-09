import { SerializedError } from 'backend/errors/custom-error';
import { Viewer } from 'shared/interfaces';

export interface Auth {
  viewer: Viewer | null | undefined;
  signUpErrors: SerializedError[];
  getViewerErrors: SerializedError[];
  signInErrors: SerializedError[];
  signOutErrors: SerializedError[];
  loading: boolean;
}
