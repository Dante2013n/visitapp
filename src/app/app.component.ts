import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Recommendations',
      url: '/home'
    },
    {
      title: 'Google Maps',
      url: '/ubicacion'
    },
    {
      title: 'Events',
      url: '/calendario'
    },
    {
      title: 'Plans',
      url: '/tareas'
    },
    {
      title: 'Earn Points',
      url:'/camara'
    },
    {
      title:'Exit',
      url:'/login'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
