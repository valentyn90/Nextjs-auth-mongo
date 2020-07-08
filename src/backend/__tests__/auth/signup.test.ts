import nodeMocks from 'node-mocks-http';
import { NextApiRequest, NextApiResponse } from 'next';

import signup from 'pages/api/auth/signup';

let req: nodeMocks.MockRequest<NextApiRequest>;

afterAll(async () => {
  await req.client?.close();
});

it('returns a 201 on successful signup', async () => {
  req = nodeMocks.createRequest({
    method: 'POST',
    body: {
      firstName: 'John',
      email: 'test@test.com',
      password: '1234',
    },
  });
  const res = nodeMocks.createResponse<NextApiResponse>();
  await signup(req, res);
  expect(res.statusCode).toEqual(201);
});

it('returns a 400 with an invalid firstName', async () => {
  req = nodeMocks.createRequest({
    method: 'POST',
    body: {
      firstName: 'J',
      email: 'asdf',
      password: '1234',
    },
  });
  const res = nodeMocks.createResponse<NextApiResponse>();
  await signup(req, res);
  expect(res.statusCode).toEqual(400);
});

it('returns a 400 with an invalid email', async () => {
  req = nodeMocks.createRequest({
    method: 'POST',
    body: {
      firstName: 'John',
      email: 'asdf',
      password: '1234',
    },
  });
  const res = nodeMocks.createResponse<NextApiResponse>();
  await signup(req, res);
  expect(res.statusCode).toEqual(400);
});

it('returns a 400 with an invalid password', async () => {
  req = nodeMocks.createRequest({
    method: 'POST',
    body: {
      firstName: 'John',
      email: 'test@test.com',
      password: '   ',
    },
  });
  const res = nodeMocks.createResponse<NextApiResponse>();
  await signup(req, res);
  expect(res.statusCode).toEqual(400);
});

it('returns a 400 with missing firstName', async () => {
  req = nodeMocks.createRequest({
    method: 'GET',
    body: {
      email: 'test@test.com',
      password: '1234',
    },
  });
  const res = nodeMocks.createResponse<NextApiResponse>();
  await signup(req, res);
  expect(res.statusCode).toEqual(400);
});

it('returns a 400 with missing email', async () => {
  req = nodeMocks.createRequest({
    method: 'GET',
    body: {
      firstName: 'John',
      password: '1234',
    },
  });
  const res = nodeMocks.createResponse<NextApiResponse>();
  await signup(req, res);
  expect(res.statusCode).toEqual(400);
});

it('returns a 400 with missing password', async () => {
  req = nodeMocks.createRequest({
    method: 'GET',
    body: {
      firstName: 'John',
      email: 'test@test.com',
    },
  });
  const res = nodeMocks.createResponse<NextApiResponse>();
  await signup(req, res);
  expect(res.statusCode).toEqual(400);
});

it('disallows duplicate emails', async () => {
  req = nodeMocks.createRequest({
    method: 'POST',
    body: {
      firstName: 'John',
      email: 'test@test.com',
      password: '1234',
    },
  });
  const res = nodeMocks.createResponse<NextApiResponse>();
  await signup(req, res);
  expect(res.statusCode).toEqual(201);
  await signup(req, res);
  expect(res.statusCode).toEqual(400);
});

it('sets cookie after successful signup', async () => {
  req = nodeMocks.createRequest({
    method: 'POST',
    body: {
      firstName: 'John',
      email: 'test@test.com',
      password: '1234',
    },
  });
  const res = nodeMocks.createResponse<NextApiResponse>();
  await signup(req, res);
  expect(res.statusCode).toEqual(201);
  expect(res.cookies).toBeDefined();
});

it('should return 404 if the method is not POST', async () => {
  req = nodeMocks.createRequest({
    method: 'GET',
    body: {
      firstName: 'John',
      email: 'test@test.com',
      password: '1234',
    },
  });
  const res = nodeMocks.createResponse<NextApiResponse>();
  await signup(req, res);
  expect(res.statusCode).toEqual(404);
});
