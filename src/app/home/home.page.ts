import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) {}

  onClick() {
    this.router.navigate(['/aboutus']);
  }

  onClickNavCtrl() {
    this.navCtrl.navigateForward('/contact-us');
  }
}
