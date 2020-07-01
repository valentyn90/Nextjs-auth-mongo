import { ObjectID } from 'mongodb';

export interface UserDocument {
  _id: ObjectID;
  email: string;
  password: string;
}

export interface UserToJSON {
  id: string;
  email: string;
}

export class User {
  public id: string;
  public email: string;
  private password: string;

  constructor(userDocument: UserDocument) {
    const { _id, email, password } = userDocument;
    this.id = _id.toHexString();
    this.email = email;
    this.password = password;
  }

  toJSON(): UserToJSON {
    const { id, email } = this;
    return { id, email };
  }
}
