import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  constructor(
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async presentAlert(msg) {
    const alert = await this.alertCtrl.create({
      header: 'Test Component Alert',
      subHeader: 'Test',
      message: msg,
      buttons: ['Baik']
    });
    await alert.present();
  }

  clickMe() {
    this.presentAlert('Saya dari click me');
  }

}
