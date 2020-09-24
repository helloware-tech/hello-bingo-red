import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserState } from '../interfaces/user-state';
import { AppService } from './app.service';

@Injectable({
	providedIn: 'root'
})

export class AuthService {
	private _USER_STATUS: UserState | null = null;

	constructor(
		private app: AppService,
		private http: HttpClient,
		private storage: Storage
	) {
		this.checkUserStatus();
	}
	public get USER_STATUS(): UserState | null {
		return this._USER_STATUS;
	}
	public get USER_TOKEN(): string | null {
		if (!this._USER_STATUS) {
			return null;
		}
		return this._USER_STATUS.Authorization;
	}
	public signIn(username: string, password: string): Promise<any> {
		return new Promise(async (resolve, reject) => {
			try {
				const response: any = await this.http.post(this.app.API_LOGIN, { username, password }).toPromise();
				this.setUserStatus(response);
				resolve('You have successfully logged in!');
			} catch (error) {
				reject('We could not login!');
			}
		});
	}
	public logout(): Promise<any> {
		return new Promise(async (resolve, reject) => {
			try {
				await this.setUserStatus(null);
				resolve('You have successfully logged out!');
			} catch (error) {
				reject(error);
			}
		});
	}
	public setUserStatus(state: UserState | null) {
		this._USER_STATUS = state;
		return this.storage.set('login-status', state);
	}
	public getUserStatus(): Promise<UserState> {
		return this.storage.get('login-status');
	}
	public async checkUserStatus() {
		try {
			const status = await this.getUserStatus();
			this._USER_STATUS = status;
		} catch (error) {
			this.setUserStatus(null);
		}
	}
}
