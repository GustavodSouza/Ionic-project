import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Página Inicial',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Calcular Piquete',
      url: '/calcular-piquete',
      icon: 'calculator'
    },
    {
      title: 'Consumo Animal',
      url: '/calcular-consumo-animal',
      icon: 'calculator'
    },
    {
      title: 'Histórico de Calculos',
      url: '/historico-calculo',
      icon: 'clipboard'
    },
    {
      title: 'Sobre nós',
      url: '/sobre',
      icon: 'contacts'
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
      this.statusBar.backgroundColorByHexString('#ffffff');
      this.splashScreen.hide();
    });
  }
}
