import React from 'react';
import { Typography } from '@material-ui/core';

interface Props {
  text: string;
  data: string;
}

const ProfileItem: React.FC<Props> = ({ text, data }: Props) => {
  return (
    <Typography variant="subtitle2">
      {text}{' '}
      <Typography variant="body1" component="span">
        {data}
      </Typography>
    </Typography>
  );
};

export default ProfileItem;
