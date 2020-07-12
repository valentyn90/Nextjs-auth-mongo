import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';
import { ObjectID, Collection } from 'mongodb';
import { Viewer } from 'shared/interfaces';

const scryptAsync = promisify(scrypt);

export interface UserDoc {
  _id: ObjectID;
  firstName: string;
  email: string;
  password: string;
}

export interface TokenPayload {
  id: string;
}

export type UsersCollection = Collection<UserDoc>;

export class User {
  public id: string;
  private firstName: string;
  private email: string;
  private password: string;

  constructor(userDoc: UserDoc) {
    const { _id, firstName, email, password } = userDoc;
    this.id = _id.toHexString();
    this.firstName = firstName;
    this.email = email;
    this.password = password;
  }

  toJSON(): Viewer {
    const { firstName, id, email } = this;
    return { id, firstName, email };
  }

  toJWT(): TokenPayload {
    return { id: this.id };
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
