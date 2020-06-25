import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from './../../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  invalidCredentials:string = null;
  emailError:string = null;
  passwordError:string = null;
  constructor(private userService:UserService) { }
  ngOnInit(): void {
  }

  login(form){
    let userCredentials = form.value
    console.log(userCredentials)
    this.userService.login(userCredentials).subscribe(data =>{
      let userData = data.data;
      this.userService.activateUser(userData);
      console.log(userData)
    },
    err =>{
      this.emailError = null
      this.passwordError = null
      let fieldErrors = err.error.error.fieldErrors
      let loginError = err.error.error.message

      if(fieldErrors){
        for (const fieldError of fieldErrors) {
          if(fieldError.field == "email")
            this.emailError = fieldError.message
          if(fieldError.field == "password")
            this.passwordError = fieldError.message
        }
      }
      if(loginError && !fieldErrors)
        this.invalidCredentials = loginError
      else
         this.invalidCredentials = null
      console.log(err)

    })
  }

}
