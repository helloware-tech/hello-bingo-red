import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
	providedIn: 'root'
})

export class UsersService {
	public users: Array<User> = [];

	constructor(
		private http: HttpClient
	) {
		this.getUsers();
	}

	public getUsers() {
		for (let i = 0; i < 10; i++) {
			this.http.get('https://randomuser.me/api/').toPromise()
			.then((res: any) => {
				this.users.push(res.results[0]);
			});
		}
	}
}
