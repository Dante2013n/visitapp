import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slides = [
    {
      img:'assets/1.jpg',
      titulo:'Ex Hacienda Corralejo',
      descripcion:'Fundada en 1565 por Don Alonso de Angulo y Montesino, fue la casa grande de esta hacienda la que vio nacer al Padre de la Patria, Don Miguel Hidalgo y Costilla en 1753, ya que su padre fungía como administrador de la hacienda.'
    },
    {
      img:'assets/2.jpg',
      titulo:'Tequilera Corralejo',
      descripcion: 'Construida a mediados del siglo XVIII por Don Pedro Sánchez de Tagle, en su enorme extensión se encontraban 42 sitios grandes y 26 pequeños, ahora cascos de hacienda.'
    },
    {
      img:'assets/3.jpg',
      titulo:'Zona Arqueológica Plazuelas',
      descripcion: 'Construido como un espacio abierto y vinculado de manera directa con los cerros que lo rodean, los restos encontrados en esta zona indican que fue uno de los asentamientos más complejos de la región.'
    }
  ];

  constructor(public geolocation:Geolocation){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }
  
}
