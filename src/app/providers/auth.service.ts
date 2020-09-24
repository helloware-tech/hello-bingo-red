import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _LOGIN_STATUS: any = false;

  constructor(
    private app: AppService,
    private http: HttpClient,
    private storage: Storage
  ) {
    this.checkLoginStatus();
  }
  public get LOGIN_STATUS(): boolean {
    return this._LOGIN_STATUS;
  }
  public signIn(username: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      // this.http.post(this.app.API_LOGIN, '{\n	"username": "superadmin",\n	"password": "1234"\n}').subscribe((res) => {
      //   console.log(res);
      // });
      this.setLoginStatus(true);
      resolve('You have successfully logged in!');
    });
  }
  public logout(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.setLoginStatus(false);
        resolve('You have successfully logged out!');
      } catch (error) {
        reject(error);
      }
    });
  }
  public setLoginStatus(state: boolean) {
    this._LOGIN_STATUS = state;
    return this.storage.set('login-status', state);
  }
  public getLoginStatus(): Promise<any> {
    return this.storage.get('login-status');
  }
  public async checkLoginStatus() {
    try {
      const status = await this.getLoginStatus();
      this._LOGIN_STATUS = !!status;
    } catch (error) {
      this._LOGIN_STATUS = false;
    }
  }
}
