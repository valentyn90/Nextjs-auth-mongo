import styled from 'styled-components';

export const PageTitle = styled.h1`
  margin-bottom: 1rem;
  font-size: 2rem;
  line-height: 2.2rem;
  font-weight: bold;
`;

export const TextInput = styled.input`
  display: block;
  padding: 0.4rem 0.8rem;
  border: 1px solid ${({ theme }): string => theme.colors.four};
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1rem;
`;

export const InputBox = styled.div`
  margin-bottom: 0.6rem;
  display: flex;
  align-items: flex-end;
`;

export const ErrorPara = styled.p`
  margin-left: 1rem;
  color: orangered;
`;
