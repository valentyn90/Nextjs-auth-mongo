import { ObjectID } from 'mongodb';

export interface UsersCollection {
  _id: ObjectID;
  email: string;
  password: string;
}

export class User {
  constructor(public id: string, public email: string) {}

  toJSON(): { id: string; email: string } {
    return { id: this.id, email: this.email };
  }
}
