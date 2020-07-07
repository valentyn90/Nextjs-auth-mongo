import styled from 'styled-components';

export const Header = styled.header`
  padding: 0.5rem 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  background-color: ${({ theme }): string => theme.colors.five};
`;

export const Nav = styled.nav`
  padding: 0 1.8rem;
  flex: 5;
  display: flex;
  justify-content: space-between;
`;

export const Box = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-between;
`;

export const ViewerInfo = styled.p<{ active: boolean }>`
  padding: 1rem 1.8rem;
  font-weight: bold;
  color: ${({ theme }): string => theme.colors.light};
  background-color: ${({ theme, active }): string =>
    active ? theme.colors.four : theme.colors.one};
  border-radius: 4px;
`;
