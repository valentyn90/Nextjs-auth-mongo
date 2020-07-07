import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';
import { ObjectID, Collection } from 'mongodb';

const scryptAsync = promisify(scrypt);

export interface UserDoc {
  _id: ObjectID;
  email: string;
  password: string;
}

export type UsersCollection = Collection<UserDoc>;

export interface Viewer {
  id: string;
  email: string;
}

export class User {
  public id: string;
  public email: string;
  private password: string;

  constructor(userDoc: UserDoc) {
    const { _id, email, password } = userDoc;
    this.id = _id.toHexString();
    this.email = email;
    this.password = password;
  }

  toJSON(): Viewer {
    const { id, email } = this;
    return { id, email };
  }

  async comparePassword(suppliedPassword: string): Promise<boolean> {
    const [hashedPassword, salt] = this.password.split('.');
    const buf = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;

    return buf.toString('hex') === hashedPassword;
  }

  static async toHash(password: string): Promise<string> {
    const salt = randomBytes(8).toString('hex');
    const buf = (await scryptAsync(password, salt, 64)) as Buffer;

    return `${buf.toString('hex')}.${salt}`;
  }
}
