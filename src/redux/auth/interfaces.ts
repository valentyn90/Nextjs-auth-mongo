import { SerializedError } from 'backend/errors/custom-error';
import { Viewer } from 'shared/interfaces';

export interface Auth {
  viewer: Viewer | null;
  errors: SerializedError[];
}
