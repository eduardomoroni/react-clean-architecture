import { Credential, User } from "../entities";

export interface SignInService {
  signInWithCredential: (credential: Credential) => Promise<User>;
}

export class SignInInteractor {
  signInService: SignInService;

  constructor(signInService: SignInService) {
    this.signInService = signInService;
  }

  async signIn(credential: Credential): Promise<User> {
    return this.signInService.signInWithCredential(credential);
  }
}
