import styled from 'styled-components';
import { customButton } from 'styled/global-style';

export const Header = styled.header`
  padding: 1rem 1.8rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.five};

  & > * {
    margin-right: 1rem;
  }
`;

export const Input = styled.input`
  ${customButton}
  border: none;
`;

export const ViewerInfo = styled.p`
  padding: 1rem 1.8rem;
  font-weight: bold;
  color: ${({ theme }): string => theme.colors.light};
  background-color: ${({ theme }): string => theme.colors.one};
  border: 2px dotted ${({ theme }): string => theme.colors.light};
  border-radius: 4px;
`;
