import React from 'react';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { AppState } from 'frontend/redux/root-reducer';
import PageTitle from 'frontend/components/common/PageTitle';
import AuthContainer from '../Auth/AuthContainer';

const Profile: React.FC = () => {
  const { viewer } = useSelector((state: AppState) => state.auth);

  if (!viewer) return null;

  return (
    <AuthContainer>
      <PageTitle>Profile</PageTitle>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Your name
              </TableCell>
              <TableCell align="right">{viewer.firstName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Your email
              </TableCell>
              <TableCell align="right">{viewer.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Your ID
              </TableCell>
              <TableCell align="right">{viewer.id}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </AuthContainer>
  );
};

export default Profile;
