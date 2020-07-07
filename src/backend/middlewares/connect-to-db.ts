import { MongoClient } from 'mongodb';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { DatabaseConnectionError } from 'backend/errors/database-connections-error';

let client: MongoClient | null = null;

export const connectToDb = (nextApiHandler: NextApiHandler): NextApiHandler => async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }

  if (!process.env.DB_NAME) {
    throw new Error('DB_NAME must be defined');
  }

  try {
    if (!client) {
      client = new MongoClient(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    if (!client.isConnected()) {
      await client.connect();
      console.log('Connected to MongoDb');
    }
  } catch {
    throw new DatabaseConnectionError();
  }

  req.client = client;
  req.db = client.db(process.env.DB_NAME);

  await nextApiHandler(req, res);
};
