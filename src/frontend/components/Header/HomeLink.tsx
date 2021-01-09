import HomeIcon from '@material-ui/icons/Home';
import { LinkButton } from '../common/LinkButton';

export const HomeLink: React.FC = () => {
  return (
    <LinkButton href="/" variant="contained" color="default" startIcon={<HomeIcon />}>
      HOME
    </LinkButton>
  );
};
