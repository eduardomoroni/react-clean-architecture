import {Password} from "./password";
import {Email} from "./email";

export class Credential {
  _email: Email;
  _password: string;

  constructor(email: string, password: string) {
    if (isInsecure(password)) {
      throw new Error('Your password must contains letter and numbers');
    }

    this._password = password;
    this._email = new Email(email);
  }

  get email(): string {
    return this._email.address
  }

  get password(): string {
    return this._password.password
  }
}

function isInsecure(address: string) {
  const securePasswordRegex = /^[a-zA-Z0-9_.-]*$/;
  return !securePasswordRegex.test(address);
}
