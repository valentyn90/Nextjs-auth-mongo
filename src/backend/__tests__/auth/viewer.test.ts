import nodeMocks from 'node-mocks-http';
import { NextApiRequest, NextApiResponse } from 'next';
import { parse } from 'cookie';

import signup from 'pages/api/auth/signup';
import viewer from 'pages/api/auth/viewer';

let req: nodeMocks.MockRequest<NextApiRequest>;

afterAll(async () => {
  await req.client?.close();
});

it('responds with current user id', async () => {
  req = nodeMocks.createRequest({
    method: 'POST',
    body: {
      firstName: 'John',
      email: 'test@test.com',
      password: '1234',
    },
  });
  let res = nodeMocks.createResponse<NextApiResponse>();
  await signup(req, res);
  expect(res.statusCode).toEqual(201);

  const cookieHeaderString = res.getHeader('Set-Cookie');
  req = nodeMocks.createRequest({
    method: 'GET',
    ...(cookieHeaderString &&
      typeof cookieHeaderString === 'string' && { cookies: parse(cookieHeaderString) }),
  });
  res = nodeMocks.createResponse();
  await viewer(req, res);
  const data = res._getJSONData();
  expect(data.viewer.id).toBeDefined();
});

it('responds with null if not authenticated', async () => {
  req = nodeMocks.createRequest({
    method: 'GET',
  });
  const res = nodeMocks.createResponse();
  await viewer(req, res);
  const data = res._getJSONData();
  expect(data.viewer).toBeNull();
});
