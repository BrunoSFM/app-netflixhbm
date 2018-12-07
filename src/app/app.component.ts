import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Splash } from '../pages/splash/splash';

import { CacheService } from "ionic-cache";
import { BackgroundMode } from '@ionic-native/background-mode';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, cache: CacheService, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController, backgroundMode: BackgroundMode) {
    
    let splash = modalCtrl.create(Splash);
    splash.present();
    splashScreen.hide();
    statusBar.overlaysWebView(true);
    statusBar.backgroundColorByHexString('#d32f2f');
    
    platform.ready().then(() => {
        //statusBar.styleDefault();
        backgroundMode.enable();
        backgroundMode.overrideBackButton();
    });
  }
}
