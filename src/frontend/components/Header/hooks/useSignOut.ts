import { useDispatch } from 'react-redux';
import { signOutStart } from 'frontend/redux/auth/actions';

export const useSignOut = (): {
  onSignOutClick: () => void;
} => {
  const dispatch = useDispatch();

  const onSignOutClick = () => {
    dispatch(signOutStart());
  };
  return { onSignOutClick };
};
