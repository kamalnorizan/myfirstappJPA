import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  myText: any;
  constructor() { }

  ngOnInit() {
  }

  changetext() {
    this.myText = 'This is text from Change Text function';
  }

}
