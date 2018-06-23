import {Credential, User, Email} from "../entities";

export interface SignUpService {
  signUpUser: (Person, Credential) => Promise<User>;
  verifyExistingEmail: (Email) => Promise<boolean>;
}

export class SignInInteractor {
  signUpService: SignUpService;

  constructor(signUpService: SignUpService){
    this.signUpService =  signUpService;
  }

  async signInWithEmailAndPassword(firstName: string, lastName: string, credential: Credential): Promise<User> {
    const email = credential.email;

    if (this.signUpService.verifyExistingEmail(email)) {
      throw new Error("There's an User with this email, if you forgot your pass...");
    }

    const user = new User(firstName, lastName, email);
    return this.signUpService.signUpUser(user, credential);
  }
}
