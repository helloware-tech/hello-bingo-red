import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../providers/auth.service';

@Injectable({
	providedIn: 'root'
})

export class IsLogged implements CanActivate {

	constructor(public authService: AuthService, private router: Router) { }

	public canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.checkLogin();
	}
	public async checkLogin() {
		const state = await this.authService.getUserStatus();
		if (!state) {
			this.router.navigate(['/login']);
		}
		return !!state;
	}
}
