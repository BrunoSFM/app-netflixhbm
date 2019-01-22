import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

import * as $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    
  HomePage: HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    setTimeout(() => {
        $('.login-area').addClass("ready");
    }, 2000);
  }
  
  Auth() {
    this.navCtrl.setRoot(HomePage);
    //this.navCtrl.push(HomePage);
  }

}
