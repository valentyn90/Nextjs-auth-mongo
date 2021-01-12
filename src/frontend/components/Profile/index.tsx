import { PageTitle } from 'frontend/components/common/PageTitle';
import { AuthContainer } from '../Auth/AuthContainer';
import { ProfileTable } from './ProfileTable';

export const Profile: React.FC = () => {
  return (
    <AuthContainer>
      <PageTitle>Your Profile</PageTitle>
      <ProfileTable />
    </AuthContainer>
  );
};
