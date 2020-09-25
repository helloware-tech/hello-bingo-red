import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { AppService } from './app.service';

@Injectable({
	providedIn: 'root'
})

export class UsersService {
	public users: Array<User> = [];

	constructor(
		private http: HttpClient,
		private app: AppService
	) {
		this.getUsers();
	}

	public getUsers() {
		for (let i = 0; i < 10; i++) {
			this.http.get(this.app.API_USERS).toPromise()
			.then((res: any) => {
				this.users.push(res.results[0]);
			});
		}
	}
}
