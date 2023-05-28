import { makeAutoObservable } from "mobx";

class UserStore {
  status = "unauthenticated";
  name = "";
  email = "";
  image = "";
  role = "";
  activo = "";

  constructor() {
    makeAutoObservable(this);
  }

  reset() {
    this.status = "unauthenticated";
    this.name = "";
    this.email = "";
    this.image = "";
    this.role = "";
    this.activo = "";
  }

  setAuth(user) {
    this.status = "authenticated";
    this.name = user.name;
    this.email = user.email;
    this.image = user.image;
    this.role = user.role;
    this.activo = user.activo;
  }
}

export default new UserStore();
