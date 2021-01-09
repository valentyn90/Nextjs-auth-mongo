import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { signOutStart } from 'frontend/redux/auth/actions';

export const SignOutButton: React.FC = () => {
  const dispatch = useDispatch();

  const onSignOutClick = () => {
    dispatch(signOutStart());
  };

  return (
    <Button onClick={onSignOutClick} variant="contained" color="secondary">
      Sign Out
    </Button>
  );
};
