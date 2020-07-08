import React from 'react';

import Header from '../Header';
import * as Styled from './styles';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Header />
      <Styled.Container>{children}</Styled.Container>
    </React.Fragment>
  );
};

export default Layout;
