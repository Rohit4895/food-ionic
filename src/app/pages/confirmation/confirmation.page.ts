import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {

  constructor(private navCntrl : NavController, private router : Router) { 
    setTimeout(() => {
      this.navCntrl.pop();
    }, 2000)
  }

  ngOnInit() {
  }

  goHome(){
    this.router.navigate(['/home']);
  }

}
