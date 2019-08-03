import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {  GoogleMaps,   GoogleMap} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';
import {ToastController,LoadingController} from '@ionic/angular';
import {GoogleMapsEvent,Marker,GoogleMapsAnimation,MyLocation} from '@ionic-native/google-maps';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {
  map:GoogleMap;
  loading:any;

  constructor(
    public loadingCtrl:LoadingController, 
    public toastCtrl:ToastController, 
    public plataform:Platform) { }

  async ngOnInit() {
    await this.plataform.ready();
    await this.loadMap();
  }
  loadMap(){
    this.map = GoogleMaps.create('map_canvas',{
      camera:{
        target:{
          lat: 20.436388,
          lng: -101.724169
        },
        zoom:18,
        tilt: 30
      }
    });
  }
  
}
