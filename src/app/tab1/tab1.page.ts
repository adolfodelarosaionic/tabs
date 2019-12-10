import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  resultado: number;
  numeroDNI: number;
  letra: string;
  letras: string[] = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
 
  constructor(public toastController: ToastController) {}

  calcularLetraDNI() {
    console.log('En Calcular letra ' + this.numeroDNI);
    this.resultado = (this.numeroDNI % this.letras.length);
    this.letra = this.letras[this.resultado];
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'La letra que le corresponde es: ' + this.letra,
      duration: 2000
    });
    toast.present();
  }

}
