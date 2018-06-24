import { Email } from "./email";

export class Credential {
  _email: Email;
  _password: string;

  constructor(email: string, password: string) {
    if (isInvalid(password)) {
      throw new Error("Your password must contains only letter and numbers");
    }

    this._password = password;
    this._email = new Email(email);
  }

  get email(): string {
    return this._email.address;
  }

  get password(): string {
    return this._password;
  }
}

function isInvalid(password: string) {
  const passwordRegex = /^[a-zA-Z0-9_.-]*$/;
  return !passwordRegex.test(password);
}
