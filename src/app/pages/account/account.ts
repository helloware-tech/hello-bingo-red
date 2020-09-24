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
	public username = '';

	constructor(
		private router: Router,
		private auth: AuthService,
		public alertCtrl: AlertController,
		public account: AccountService
	) { }

	ngAfterViewInit() {
		this.getUsername();
	}

	updatePicture() {
		console.log('Clicked to update picture');
	}
	async changeUsername() {
		const alert = await this.alertCtrl.create({
			header: 'Change Username',
			buttons: [
				'Cancel',
				{
					text: 'Ok',
					handler: (data: any) => {
						this.getUsername();
					}
				}
			],
			inputs: [
				{
					type: 'text',
					name: 'username',
					value: this.username,
					placeholder: 'username'
				}
			]
		});
		await alert.present();
	}

	getUsername() {
	}

	changePassword() {
		console.log('Clicked to change password');
	}

	logout() {
		this.auth.logout().then((message) =>  {
			this.router.navigateByUrl('/login');
		});
	}

	support() {
		this.router.navigateByUrl('/support');
	}
}
