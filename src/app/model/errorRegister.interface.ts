import { FieldErrorMessageInterface } from './fieldError.interface'

export interface ErrorRegisterInterface{
  status:number,
  message:string,
  errors:FieldErrorMessageInterface[]
}
