import 'next';
import { Store } from 'redux';
import { Db, MongoClient } from 'mongodb';
import { CurrentUser } from 'backend/models/user';

import { AppState } from '../redux/reducer';

declare module 'next' {
  export interface NextPageContext {
    store: Store<AppState>;
  }
  export interface NextApiRequest {
    currentUser?: CurrentUser;
    client?: MongoClient;
    db?: Db;
  }
}
