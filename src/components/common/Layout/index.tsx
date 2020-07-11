import { Box } from '@material-ui/core';
import Header from '../Header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Box mt={8} py={2} px={3}>
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
