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

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }, {
          text: 'Test',
          handler: () => {
            this.presentAlert('Saya dari click me');
          }
        }
      ]
    });
    console.log('dari alert confirm');
    await alert.present();
  }

  clickMe() {
    // this.presentAlert('Saya dari click me');
    this.presentAlertConfirm();
    console.log('dari clickme');
  }

}
