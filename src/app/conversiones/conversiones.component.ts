import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-conversiones',
  imports: [
    FormsModule
  ],
  templateUrl: './conversiones.component.html',
  styleUrl: './conversiones.component.css'
})
export class ConversionesComponent {
  farenheit: number = 0;
  kelvin: number = 0;
  celsius: number = 0;

  changeFarenheit()
  {
    this.celsius = (this.farenheit - 32) / 1.8;
    this.kelvin = ((this.farenheit - 32) / 1.8) + 273.15;
  }
  changeKelvin()
  {
    this.celsius = this.kelvin - 273.15;
    this.farenheit = ((this.kelvin - 273.15) * 1.8) + 32;
  }
  changeCelsius()
  {
    this.farenheit = (this.celsius * 1.8) + 32;
    this.kelvin = this.celsius + 273.15;
  }
}
