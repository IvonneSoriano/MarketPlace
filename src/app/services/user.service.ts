import { UserInterface } from './../model/user.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: UserInterface;
  users: UserInterface[] = [];

  constructor() { }

  register(newUser: UserInterface) {
    let id = Math.floor(Math.random() * 10) + 5;
    console.log(`El id es ${id}`);
    this.user = newUser;
    this.user.id = id;
    localStorage.setItem("user", JSON.stringify(this.user));
    this.users.push(this.user);

  }


}
