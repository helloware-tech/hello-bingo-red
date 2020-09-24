import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';
import { User } from '../../interfaces/user';
import { AccountService } from '../../providers/account.service';
import { AuthService } from '../../providers/auth.service';

@Component({
	selector: 'page-account',
	templateUrl: 'account.html',
	styleUrls: ['./account.scss'],
})

export class AccountPage implements AfterViewInit {
	public photoURL = 'https://www.gravatar.com/avatar?d=mm&s=140';

	constructor(
		private router: Router,
		private auth: AuthService,
		public alertCtrl: AlertController,
		public account: AccountService
	) { }

	ngAfterViewInit() {
		this.account.getUserData();
	}

	public logout() {
		this.auth.logout().then((message) =>  {
			this.router.navigateByUrl('/login');
		});
	}
}
