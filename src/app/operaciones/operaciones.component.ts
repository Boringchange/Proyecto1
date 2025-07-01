import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-operaciones',
  imports: [FormsModule],
  templateUrl: './operaciones.component.html',
  styleUrl: './operaciones.component.css'
})

export class OperacionesComponent {
  numeroUno: number = 0;
  numeroDos: number = 0;
  resultado: number = 0;

  sumar()
  {
    this.resultado = this.numeroUno + this.numeroDos;

    Swal.fire({
      title: "Operacion Sumar",
      text: "That thing is still around?",
      icon: "question"
    });

  }
  restar()
  {
    this.resultado = this.numeroUno - this.numeroDos;
  }
  multiplicar()
  {
    this.resultado = this.numeroUno * this.numeroDos;
  }
  dividir()
  {
    try {
      this.resultado = this.numeroUno / this.numeroDos;
    }
    catch (error) {
      this.resultado = 0;
    }
  }
}
