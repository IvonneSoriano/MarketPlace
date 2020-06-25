import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, AbstractControl, FormControl, Validator } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ErrorRegisterInterface } from './../../model/errorRegister.interface'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  public formGroup: FormGroup;
  public roles = [{
    id: 1,
    name: "consumidor"
  },
  {
    id: 2,
    name: "transportista"
  },
  {
    id: 3,
    name: "vendedor"
  },
]

  emailDuplicated:string = null;
  phoneDuplicated:string = null;


  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  //Creando el formulario
  private buildForm() {



    this.formGroup = this.formBuilder.group({
      name: new FormControl("", [Validators.required, Validators.pattern(/^[A-Z]+$/i)]),
      lastname: ["", [Validators.required, Validators.pattern(/^[A-Z]+$/i)]],
      email: ["", [Validators.required, Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)]],
      phone: ["", [Validators.required, Validators.pattern(/^\d{4}(-|\s)\d{4}$/)]],
      password: ["", [Validators.required, Validators.minLength(8), this.validatePassword ]],
      confirmPsw: ["", [Validators.required, Validators.minLength(8) ]],
      rol: ["", Validators.required],
      acceptTerms: ["", Validators.requiredTrue]
    },
    {
      validators : [this.checkPasswords, this.checkPass]
    });
  }

  //Validador de contra
  private validatePassword(control: AbstractControl) {
    let pass = control.value;
    let error = null;
    console.log(`El valor que recibo ${pass}`);
    //Estas son dos expresiones regulares
    // let regex = new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/);
    let regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/;
    // Para evaluarlas se usa la funcion .test
    if(!regex.test(pass)){
      error = {invalidPassword: true};
    }
    return error;
  }
  //Verificar si ya hay contra
  private checkPass(form : FormGroup){
    let p = form.controls.password;
    let confirm = form.controls.confirmPsw;
    if(p.value==null){
      confirm.disabled;

    }
  }

  //Verificar que ambas contraseñas sean iguales
  private checkPasswords( form : FormGroup){
    let error = null;
    let confirm = form.controls.confirmPsw;
    let p = form.controls.password;


      if(p.dirty && confirm.dirty){
        if(confirm.value !== p.value){
          error= {passwordsNotEqual: true};
        }
      }

    return error;
  }

  onSubmit(){
    if(this.formGroup.valid){
      let user={
        rol: this.formGroup.controls.rol.value,
        name: this.formGroup.controls.name.value,
        lastName: this.formGroup.controls.lastname.value,
        phone: this.formGroup.controls.phone.value,
        email: this.formGroup.controls.email.value,
        password: this.formGroup.controls.password.value
      };
      console.log(user);
      this.registrar(user);

    }
    else{
      console.log("El formulario no es valido!");
    }
  }

  registrar(newUser){
    this.userService.register(newUser).subscribe(data => {
      console.log(data)
      let userData = data.data
      this.userService.activateUser(userData);
    },
    err => {
      this.emailDuplicated = null
      this.phoneDuplicated = null
      let fieldErrors = err.error.errors;
      try {
        if(fieldErrors.length > 0){
          for (const field of fieldErrors) {
            if(field.field == 'email')
              this.emailDuplicated = field.message
              if(field.field == 'phone')
              this.phoneDuplicated = field.message
          }
        }

      } catch (error) {
        console.log(error)
      }


    });
  }
}
