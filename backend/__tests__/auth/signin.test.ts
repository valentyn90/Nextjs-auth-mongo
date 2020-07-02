import nodeMocks from 'node-mocks-http';
import { NextApiRequest, NextApiResponse } from 'next';

import signup from 'pages/api/auth/signup';
import signin from 'pages/api/auth/signin';

let req: nodeMocks.MockRequest<NextApiRequest>;

afterAll(async () => {
  await req.client?.close();
});

it('fails when a email that does not exist is supplied', async () => {
  req = nodeMocks.createRequest({
    method: 'POST',
    body: {
      email: 'test@test.com',
      password: '1234',
    },
  });
  const res = nodeMocks.createResponse<NextApiResponse>();
  await signin(req, res);
  expect(res.statusCode).toEqual(400);
});

it('fails when an incorrect password is supplied', async () => {
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

  req = nodeMocks.createRequest({
    method: 'POST',
    body: {
      email: 'test@test.com',
      password: 'asdf',
    },
  });
  res = nodeMocks.createResponse();
  await signin(req, res);
  expect(res.statusCode).toEqual(400);
});

it('responds with a cookie when given valid credentials', async () => {
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

  req = nodeMocks.createRequest({
    method: 'POST',
    body: {
      email: 'test@test.com',
      password: '1234',
    },
  });
  res = nodeMocks.createResponse<NextApiResponse>();
  await signin(req, res);
  expect(res.statusCode).toEqual(200);
  expect(res.cookies).toBeDefined();
});
