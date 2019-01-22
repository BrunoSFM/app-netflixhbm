import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BackgroundMode } from '@ionic-native/background-mode';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';

import * as $ from 'jquery';
declare var HtmlJsVars_SetVar: any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  constructor(public navCtrl: NavController, private toastCtrl: ToastController, public storage: Storage, public backgroundMode: BackgroundMode, public localNotifications: LocalNotifications) {
    
  }
  
  ionViewDidLoad() {
        /*this.backgroundMode.enable();
        this.backgroundMode.setDefaults({
            title: "NHBM Service",
            text: "Aberto em segundo plano...",
            color: "000000",
            icon: "icon"
        });
        this.backgroundMode.overrideBackButton();*/
        
    this.RefreshUserData(this);
    setTimeout(() => {
        if(this.backgroundMode.isEnabled()) {
            this.localNotifications.schedule({
                text: 'Notificação de Teste',
                sound: null
            });
        }
    }, 5000);
  }
  
  API_URL() {
    return "https://netflix.hostbm.pt";
  }
  
  public ToastMessage(msg: string, pos?: string, duration?: number) {
    let toast = this.toastCtrl.create({
    message: msg,
    duration: duration=(duration===undefined)?3000:duration,
    position: pos=(pos===undefined)?"bottom":pos
    });
    toast.present();
  }
  
  RefreshPosts(refresher) {
    var now = new Date();
    setTimeout(() => {
        HtmlJsVars_SetVar("postdata[0].title","São exatamente <strong>"+now.getHours()+":"+now.getMinutes()+" ("+now.getSeconds()+" Segundos)</strong>");
        HtmlJsVars_SetVar("postdata[1].title","<strong>Bruno Miguel</strong> é um grande programador!");
        refresher.complete();

        this.ToastMessage("Publicações atualizadas...");
    }, 2000);
  }
  
  RefreshUserData(t) {
    var UserDataUpdate = function(data) {
        if(data.success) { 
            HtmlJsVars_SetVar("userdata.name", data.userdata.name);
            HtmlJsVars_SetVar("userdata.group", "Grupo "+data.userdata.group_number);
        } else {
            t.ToastMessage("Não foi possível obter os seus dados...");
        }
    }
    $.ajax({ method: "GET", url: t.API_URL()+"/userdata/1"}).done(function(res) {
        UserDataUpdate(res);
        t.storage.set("cache_userdata", res);
    }).fail(function(err,err2) {
        t.storage.get('cache_userdata').then((val) => {
            UserDataUpdate(val);
        }).catch(error => {
            t.ToastMessage("Sem ligação com servidor...");
        });
    });
  }
}
