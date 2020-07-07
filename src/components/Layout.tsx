import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }): string => theme.colors.primary};
`;

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
