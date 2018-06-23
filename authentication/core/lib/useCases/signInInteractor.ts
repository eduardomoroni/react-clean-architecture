import {Credential, User} from "../entities";

export interface SignInService {
  signInWithCredential: (credential: Credential) => Promise<User>;
}

export class SignInInteractor {
  signInService: SignInService;

  constructor(signInService: SignInService){
    this.signInService =  signInService;
  }

  async signInWithEmailAndPassword(email: string, password: string): Promise<User> {
    const credential = new Credential(email, password);
    return this.signInService.signInWithCredential(credential);
  }
}
