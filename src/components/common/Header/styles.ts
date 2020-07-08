import styled from 'styled-components';
import { customButton } from 'styled/global-style';

export const Header = styled.header`
  padding: 1rem 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  background-color: ${({ theme }): string => theme.colors.five};
`;

export const Nav = styled.nav`
  width: 100%;
  padding: 0 1.8rem;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  ${customButton}
  border: none;
`;

export const ViewerInfo = styled.p<{ active: boolean }>`
  padding: 1rem 1.8rem;
  font-weight: bold;
  color: ${({ theme }): string => theme.colors.light};
  background-color: ${({ theme, active }): string =>
    active ? theme.colors.four : theme.colors.one};
  border: 2px dotted ${({ theme }): string => theme.colors.light};
  border-radius: 4px;
`;
