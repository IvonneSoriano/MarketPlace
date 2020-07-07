import { environment } from './../../environments/environment.prod';
import { UserInterface} from './../model/user.interface';
import { ErrorRegisterInterface } from './../model/errorRegister.interface'
import { UserCredentials } from './../model/userCredentials.interface'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'



@Injectable({
  providedIn: 'root'
})
export class UserService {

  //urlRegister = "http://localhost:8080/signup/register";
  urlRegister = "https://pipeline-inwshop.herokuapp.com/signup/register";
  urlLogin = environment.login+"/login";

  constructor(private http:HttpClient, private router:Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  login(userCredentialsJson:UserCredentials):Observable<any>{
    let userCredentials = JSON.stringify(userCredentialsJson)
    console.log(userCredentials)
    return this.http.post<any>(this.urlLogin,userCredentials,this.httpOptions);
  }

  register(newUserJson: UserInterface):Observable<any>{
    let newUser = JSON.stringify(newUserJson);
    console.log(newUser);
    return this.http.post<any>(this.urlRegister,newUser,this.httpOptions);
  }

  activateUser(data:any){
    this.setLocalStorage(data);
    this.redirectTo()
  }

  setLocalStorage(data:any):void{
    localStorage.removeItem("usuario");
    localStorage.setItem("usuario",JSON.stringify(data));
  }

  redirectTo(){
    let rol = JSON.parse(localStorage.getItem("usuario")).userRol;
    switch(rol){
      case "consumidor":
        this.router.navigate(["/client"]);
        break;
      case "transportista":
        this.router.navigate(["/transporter"]);
      break;
      case "vendedor":
        this.router.navigate(["/seller"]);
      break;
      default:
        this.router.navigate(["/account/login"]);
        break;
    }
  }

  getAccessToken(){
    let token = JSON.parse(localStorage.getItem("usuario"))["jwt"];
    return token;
  }


}
