import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  imagen: string;

  constructor( public platform: Platform ) { //Inyectar el servicio/public para que este disponible como propiedad de la clase
    
    console.log('Cargando la página tab 3');

    if ( platform.is('android') ) {
      console.log('Estoy en Android');
      window.alert('Estoy en Android');
      this.imagen = './assets/android.png';
    } else if ( platform.is('desktop') ) {
      console.log('Estoy en Desktop');
      window.alert('Estoy en Desktop');
      this.imagen = './assets/desktop.png';
    } else {
      console.log('No se donde estoy');
      window.alert('No se donde estoy');
      this.imagen = './assets/nose.png';
    }
  }

}
