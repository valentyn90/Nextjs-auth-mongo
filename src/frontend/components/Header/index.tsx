import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import dynamic from 'next/dynamic';

import { AppState } from 'frontend/redux/root-reducer';
import { ThemeModeSwitch } from './ThemeModeSwitch';
import { HomeLink } from './HomeLink';
const ViewerView = dynamic<Record<string, unknown>>(() =>
  import('./ViewerView').then((mod) => mod.ViewerView),
);
const SignInLink = dynamic<Record<string, unknown>>(() =>
  import('./SignInLink').then((mod) => mod.SignInLink),
);

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
