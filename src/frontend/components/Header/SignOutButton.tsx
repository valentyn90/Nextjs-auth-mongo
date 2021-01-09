import Button from '@material-ui/core/Button';
import { useSignOut } from './hooks/useSignOut';

export const SignOutButton: React.FC = () => {
  const { onSignOutClick } = useSignOut();

  return (
    <Button onClick={onSignOutClick} variant="contained" color="secondary">
      Sign Out
    </Button>
  );
};
