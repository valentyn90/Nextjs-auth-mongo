import nodeMocks from 'node-mocks-http';
import { NextApiRequest, NextApiResponse } from 'next';

import signup from 'pages/api/auth/signup';
import signout from 'pages/api/auth/signout';

let req: nodeMocks.MockRequest<NextApiRequest>;

it('clears the cookie after signing out', async () => {
  req = nodeMocks.createRequest({
    method: 'POST',
    body: {
      email: 'test@test.com',
      password: '1234',
    },
  });
  let res = nodeMocks.createResponse<NextApiResponse>();
  await signup(req, res);
  expect(res.statusCode).toEqual(201);

  await req.client?.close();

  req = nodeMocks.createRequest({
    method: 'POST',
  });
  res = nodeMocks.createResponse();
  await signout(req, res);
  expect(res.statusCode).toEqual(200);
  const headers = res._getHeaders();
  expect(headers['set-cookie']).toEqual(
    'jwt=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly',
  );
});
