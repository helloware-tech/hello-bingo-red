import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';
import { Tools } from './functions';
import { MyRoute } from './interfaces/my-route';
import { AuthService } from './providers/auth.service';
import { RoutesService } from './providers/routes.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent extends Tools implements OnInit {
	public pages: Array<MyRoute> = [];
	loggedIn = false;
	dark = false;

	constructor(
		private menu: MenuController,
		private router: Router,
		private routes: RoutesService,
		private auth: AuthService
	) {
		super();
		this.initializeApp();
	}

	async ngOnInit() {
		this.menu.enable(true);
	}

	initializeApp() {
		this.pages = this.routes.primaries;
	}

	logout() {
		this.auth.logout().then((message) => {
			this.toast.present(message);
			return this.router.navigateByUrl('/login');
		});
	}
}
