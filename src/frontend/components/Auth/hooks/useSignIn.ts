import { useDispatch, useSelector } from 'react-redux';
import { signInStart } from 'frontend/redux/auth/actions';
import { AppState } from 'frontend/redux/root-reducer';
import { SignInInput } from 'shared/interfaces';
import { SerializedError } from 'backend/errors/custom-error';

export const useSignIn = (): {
  signInErrors: SerializedError[];
  loading: boolean;
  onSubmit: (signInInput: SignInInput) => void;
} => {
  const dispatch = useDispatch();
  const { signInErrors, loading } = useSelector((state: AppState) => state.auth);

  const onSubmit = (signInInput: SignInInput) => {
    dispatch(signInStart(signInInput));
  };

  return { signInErrors, loading, onSubmit };
};
