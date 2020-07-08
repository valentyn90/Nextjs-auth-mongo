import 'next';
import { Store } from 'redux';
import { Db, MongoClient } from 'mongodb';
import { Viewer } from 'shared/interfaces';

import { AppState } from '../redux/reducer';

declare module 'next' {
  export interface NextPageContext {
    store: Store<AppState>;
  }
  export interface NextApiRequest {
    viewer?: Viewer;
    client?: MongoClient;
    db?: Db;
  }
}
