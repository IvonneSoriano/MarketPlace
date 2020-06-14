import { UserInterface } from './../model/user.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: UserInterface;
  users: UserInterface[] = [];
  urlRegister = "http://localhost:8080/signup/register";

  constructor(private http:HttpClient) { }

  register(newUser: UserInterface) {
    let id = Math.floor(Math.random() * 10) + 5;
    console.log(`El id es ${id}`);
    this.user = newUser;
    this.user.id = id;
    localStorage.setItem("user", JSON.stringify(this.user));
    this.users.push(this.user);

  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  register1(newUser: UserInterface):Observable<any>{
    let newUserJson = JSON.stringify(newUser);
    console.log(newUserJson);
    return this.http.post<any>(this.urlRegister,newUserJson,this.httpOptions);
  }


}
