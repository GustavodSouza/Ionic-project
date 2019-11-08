import { Component } from '@angular/core';

import { Platform, NavController, ToastController } from '@ionic/angular';
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
      title: 'Página inicial',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Calcular piquete(s)',
      url: '/calcular-piquete',
      icon: 'calculator'
    },
    {
      title: 'Calcular consumo anim.',
      url: '/calcular-consumo-animal',
      icon: 'calculator'
    },
    {
      title: 'Histórico de cálculos',
      url: '/historico-calculo',
      icon: 'clipboard'
    },
    {
      title: 'Como funciona',
      url: '/como-funciona',
      icon: 'help'
    },
    {
      title: 'Sobre nós',
      url: '/sobre',
      icon: 'contacts'
    }
  ];

  public count = 0;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleBlackOpaque;
      this.statusBar.backgroundColorByHexString('#49552a');
      this.splashScreen.hide();

    });
  }

}
