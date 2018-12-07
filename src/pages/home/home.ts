import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

declare var HtmlJsVars_SetVar: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
    
  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {
    
  }
  
  RefreshPosts(refresher) {
    var now = new Date();
    setTimeout(() => {
      HtmlJsVars_SetVar("postdata[0].title","São exatamente <strong>"+now.getHours()+":"+now.getMinutes()+" ("+now.getSeconds()+" Segundos)</strong>");
      HtmlJsVars_SetVar("postdata[1].title","<strong>Bruno Miguel</strong> é um grande programador!");
      refresher.complete();
      
      let toast = this.toastCtrl.create({
        message: 'Dados atualizados com sucesso!',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }, 2000);
  }

}
