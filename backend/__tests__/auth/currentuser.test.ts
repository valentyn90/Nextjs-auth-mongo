import nodeMocks from 'node-mocks-http';
import { NextApiRequest, NextApiResponse } from 'next';
import { parse } from 'cookie';

import signup from 'pages/api/auth/signup';
import currentuser from 'pages/api/auth/currentuser';

let req: nodeMocks.MockRequest<NextApiRequest>;

it('responds with details about the current user', async () => {
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

  const cookieHeaderString = res.getHeader('Set-Cookie');
  req = nodeMocks.createRequest({
    method: 'GET',
    ...(cookieHeaderString &&
      typeof cookieHeaderString === 'string' && { cookies: parse(cookieHeaderString) }),
  });
  res = nodeMocks.createResponse();
  await currentuser(req, res);
  const data = res._getJSONData();
  expect(data.currentUser.email).toEqual('test@test.com');
});

it('responds with null if not authenticated', async () => {
  req = nodeMocks.createRequest({
    method: 'GET',
  });
  const res = nodeMocks.createResponse();
  await currentuser(req, res);
  const data = res._getJSONData();
  expect(data.currentUser).toBeNull();
});
