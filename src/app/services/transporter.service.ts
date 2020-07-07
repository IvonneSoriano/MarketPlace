import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransporterService {

  private transporters:any[] = [
    {nombre: "Chino Express", precio: 1.5, descripcion: "Llega en 20 minutos, a menos que la rubia lo entretenga, en ese caso llega en 1 hora", imagen:"assets/images/elchino.jpg"},
    {nombre: "Camilo en guinda", precio: 1.75, descripcion: "Llega en 30 minutos, si se tarda un poco más, no preguntar solo reciba su comida y cierra la puerta rápido", imagen:"assets/images/elca.jpg"},
    {nombre: "Ivonne Mcqueen", precio: 2.25, descripcion: "Llega en 15 minutos, no se la cuentee que se puede quedar con una cachetada en vez de la comida", imagen:"assets/images/laivo.jpg"},
    {nombre: "Luis el zapato sin suela", precio: 0.75, descripcion: "Llega en 50 minutos, recibe el pedido y 20 minutos después sale, si tiene mucha hambre... mejor no lo elija", imagen:"assets/images/elzapa.jpg"}
    ];
  constructor() { }

  getTransporters():any[]{
    return this.transporters;
  }
}
