export class Password {
  password: string;

  constructor(password: string) {
    if (isInsecure(password)) {
      throw new Error('Your password must contains letter and numbers');
    } else {
      this.password = password;
    }
  }
}

function isInsecure(address: string) {
  const securePasswordRegex = /^[a-zA-Z0-9_.-]*$/;
  return !securePasswordRegex.test(address);
}
