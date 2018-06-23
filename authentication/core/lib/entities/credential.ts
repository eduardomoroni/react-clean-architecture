import {Password} from "./password";
import {Email} from "./email";

export class Credential {
  _email: Email;
  _password: Password;

  constructor(email: string, password: string) {
      this._email = new Email(email);
      this._password = new Password(password);
  }

  get email(): string {
    return this._email.address
  }

  get password(): string {
    return this._password.password
  }
}
