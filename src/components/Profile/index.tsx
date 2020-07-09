import React from 'react';
import { useSelector } from 'react-redux';

import { PageTitle } from 'styled/styles';
import { AppState } from 'redux/root-reducer';
import * as Styled from './styles';

const Profile: React.FC = () => {
  const { viewer } = useSelector((state: AppState) => state.auth);
  return (
    <div>
      <PageTitle>Profile Page</PageTitle>
      <p>
        Your name: <Styled.Span>{viewer?.firstName}</Styled.Span>
      </p>
      <hr />
      <p>
        Your email: <Styled.Span>{viewer?.email}</Styled.Span>
      </p>
      <p>
        Your id: <Styled.Span>{viewer?.id}</Styled.Span>
      </p>
    </div>
  );
};

export default Profile;
