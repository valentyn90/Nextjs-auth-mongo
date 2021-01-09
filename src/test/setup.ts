import { MongoClient, Db } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';

let client: MongoClient;
let mongo: MongoMemoryServer;
let db: Db;

beforeAll(async () => {
  process.env.JWT_KEY = 'asdfghjk';
  process.env.DB_NAME = 'testDb';
  process.env.TOKEN_EXPIRES_IN = '1m';

  mongo = new MongoMemoryServer();
  process.env.MONGO_URI = await mongo.getUri();

  client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  db = client.db(process.env.DB_NAME);
});

beforeEach(async () => {
  const collections = await db.collections();
  for (const collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await client.close();
  await mongo.stop();
});
