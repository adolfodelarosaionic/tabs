import { Component } from '@angular/core';
import { Imc } from './imc';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  peso: number;
  altura: number;
  imcNum: number;
  mensaje: string;
  imagen: string;

  imc: Imc;
  arrayImc: Array<Imc>;

  private arrayIMC: Array<Imc>;
  
  constructor() {
    this.imc = new Imc();
    this.arrayImc = new Array<Imc>();
  }
  calcularIMC() {
    this.imcNum = this.imc.peso / (this.imc.altura * this.imc.altura);
    this.imc.imcStr = (this.imcNum).toFixed(2);

    if ( this.imcNum < 16 ) {
      this.imc.nominal = 'Tu estado es DESNUTRIDO';
      this.imc.foto = './assets/girl.png';
    } else if ( this.imcNum < 18 ) {
      this.imc.nominal = 'Tu estado es DELGADO';
      this.imc.foto = './assets/pantera_rosa.png';
    } else if ( this.imcNum < 25 ) {
      this.imc.nominal = 'Tu estado es IDEAL';
      this.imc.foto = './assets/normal.png';
    } else if ( this.imcNum < 31 ) {
      this.imc.nominal = 'Tu estado es SOBREPESO';
      this.imc.foto = './assets/sobrepeso.png';
    } else {
      this.imc.nominal = 'Tu estado es OBESO';
      this.imc.foto = './assets/obeso.png';
    }

    // Creo el nuevo elemento del Array
    let imcAux = new Imc();
    imcAux.altura = this.imc.altura;
    imcAux.peso = this.imc.peso;
    imcAux.imcStr = this.imc.imcStr;
    imcAux.nominal = this.imc.nominal;
    imcAux.foto = this.imc.foto;

    // Introducirlo
    this.arrayImc.push(imcAux);
    console.log(`${this.arrayImc}`);
    this.mostrarArray();
  }

  mostrarArray() {
    for (let arreglo of this.arrayImc) {
      console.log('[' + arreglo.peso + ', ' + arreglo.altura + ', ' + arreglo.imcStr + ', ' + arreglo.nominal + ', ' + arreglo.foto + ']');
    }
  }

  limpiarLista() {
    this.arrayImc = new Array<Imc>();
  }

  ordenarPorPeso() {
    console.log('Ordenar por peso . . .');
  }

  ordenarPorAltura() {
    console.log('Ordenar por altura . . .');
  }
}
