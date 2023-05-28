import { makeAutoObservable } from "mobx";

class AuthStore {
  type = null;
  step = 1;
  email = "";
  password = "";

  // REGISTER FIELDS
  firstName = "";
  lastName = "";
  confirmPassword = "";

  constructor() {
    makeAutoObservable(this);
  }

  reset() {
    this.type = null;
    this.step = 1;
    this.email = "";
    this.password = "";
    this.firstName = "";
    this.lastName = "";
    this.confirmPassword = "";
  }
}

export default new AuthStore();
