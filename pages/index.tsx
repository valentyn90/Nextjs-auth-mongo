import Head from 'next/head';
import { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.primary};
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Homepage</h1>
    </Container>
  );
};

export default Home;
