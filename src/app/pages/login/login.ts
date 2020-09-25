import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { MyErrorStateMatcher } from '../../classes/my-error-state-matcher';
import { Tools } from '../../functions';
import { AuthService } from '../../providers/auth.service';
import { RoutesService } from '../../providers/routes.service';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
	styleUrls: ['./login.scss'],
})

export class LoginPage extends Tools {
	public hide = true;
	public usernameFormControl = new FormControl('', [
		Validators.required,
		Validators.minLength(4),
	]);
	public passwordFormControl = new FormControl('', [
		Validators.required,
	]);
	public matcher = new MyErrorStateMatcher();

	constructor(
		private auth: AuthService,
		private router: Router,
		private menu: MenuController,
		private routes: RoutesService
	) {
		super();
	 }

	ionViewWillEnter() {
		this.menu.enable(false);
	}
	ionViewWillLeave() {
		this.menu.enable(true);
	}
	public async login() {
		if (this.usernameFormControl.valid && this.passwordFormControl.valid) {
			try {
				const message = await this.auth.signIn(this.usernameFormControl.value, this.passwordFormControl.value);
				this.toast.present(message);
				this.router.navigate([this.routes.dashboard.url]);
			} catch (error) {
				this.toast.present(error);
			}
		}
	}
}
