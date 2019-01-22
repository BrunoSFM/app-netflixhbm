import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { Splash } from '../pages/splash/splash';
import { Storage } from '@ionic/storage';

import { CacheService } from "ionic-cache";
import { BackgroundMode } from '@ionic-native/background-mode';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, cache: CacheService, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController, backgroundMode: BackgroundMode, push: Push) {
    splashScreen.hide();
    let splashP = modalCtrl.create(Splash);
    splashP.present();
    statusBar.overlaysWebView(true);
    statusBar.backgroundColorByHexString('#d32f2f');
    
    platform.ready().then(() => {
        //statusBar.styleDefault();
        setTimeout(() => {
            splashScreen.hide();
        }, 100);
        
        
        /*const options: PushOptions = {};
        const pushObject: PushObject = this.push.init(options);
        pushObject.on("registration").subscribe((registration: any) => {});
        pushObject.on("notification").subscribe((notification: any) => {
          if (notification.additionalData.foreground) {
            let youralert = this.alertCtrl.create({
              title: notification.label,
              message: notification.message
            });
            youralert.present();
          }
        });*/
    });
  }
}
