import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { MenuController, ToastController } from '@ionic/angular';
import { Toast } from './functions/toast';
import { MyRoute } from './interfaces/my-route';
import { AuthService } from './providers/auth.service';
import { RoutesService } from './providers/routes.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent extends Toast implements OnInit {
  public pages: Array<MyRoute> = [];
  loggedIn = false;
  dark = false;

  constructor(
    private menu: MenuController,
    private router: Router,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    private routes: RoutesService,
    private auth: AuthService
  ) {
    super();
    this.initializeApp();
  }

  async ngOnInit() {
    this.menu.enable(true);

    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        position: 'bottom',
        buttons: [
          {
            role: 'cancel',
            text: 'Reload'
          }
        ]
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
  }

  initializeApp() {
    this.pages = this.routes.primaries;
    console.log('Inicializaded');
  }

  logout() {
    this.auth.logout().then((message) => {
      this.presentToast(message);
      return this.router.navigateByUrl('/login');
    });
  }
}
