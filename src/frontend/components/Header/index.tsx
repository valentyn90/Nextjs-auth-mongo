import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { AppState } from 'frontend/redux/root-reducer';
import { ThemeModeSwitch } from './ThemeModeSwitch';
import { ViewerView } from './ViewerView';
import { HomeLink } from './HomeLink';
import { SignInLink } from './SignInLink';

export const Header: React.FC = () => {
  const { viewer } = useSelector((state: AppState) => state.auth);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <HomeLink />
        {viewer ? <ViewerView /> : <SignInLink />}
        <ThemeModeSwitch />
      </Toolbar>
    </AppBar>
  );
};
