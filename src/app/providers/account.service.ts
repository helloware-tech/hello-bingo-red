import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile';
import { AppService } from './app.service';

@Injectable({
	providedIn: 'root'
})
export class AccountService {
	public profile: Profile;

	constructor(
		private app: AppService,
		private http: HttpClient
	) {
		this.getUserData();
	 }

	public async getUserData() {
		try {
			const response: any = await this.http.get(this.app.API_PROFILE).toPromise();
			this.profile = response.data;
		} catch (error) {
			console.log(error);
		}
	}
}
