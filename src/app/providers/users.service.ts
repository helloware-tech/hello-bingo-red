import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  public users: Array<any> = [];

  constructor(
    private http: HttpClient
  ) {
    this.getUsers();
  }

  public getUsers() {
    for (let i = 0; i < 10; i++) {
      this.http.get('https://randomuser.me/api/').subscribe((res: any) => {
        this.users.push(res.results[0]);
      });
    }
  }
}
