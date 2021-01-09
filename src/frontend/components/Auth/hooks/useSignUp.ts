import { useDispatch, useSelector } from 'react-redux';
import { signUpStart } from 'frontend/redux/auth/actions';
import { AppState } from 'frontend/redux/root-reducer';
import { SignUpForm } from 'shared/interfaces';
import { SerializedError } from 'backend/errors/custom-error';

export const useSignUp = (): {
  signUpErrors: SerializedError[];
  loading: boolean;
  onSubmit: (signUpForm: SignUpForm) => void;
} => {
  const dispatch = useDispatch();
  const { signUpErrors, loading } = useSelector((state: AppState) => state.auth);

  const onSubmit = (signUpForm: SignUpForm) => {
    dispatch(signUpStart(signUpForm));
  };

  return { signUpErrors, loading, onSubmit };
};
