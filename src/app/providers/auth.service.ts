import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _USER_STATE: any = false;

  constructor(
    private app: AppService,
    private http: HttpClient,
    private storage: Storage
  ) {
    this.checkLoginStatus();
  }
  public get USER_STATE(): boolean {
    return this._USER_STATE;
  }
  public signIn(username: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      // this.http.post(this.app.API_LOGIN, '{\n	"username": "superadmin",\n	"password": "1234"\n}').subscribe((res) => {
      //   console.log(res);
      // });
      this._USER_STATE = true;
      resolve('You have successfully logged in!');
    });
  }
  public logout(): Promise<any>{
    return new Promise(async (resolve, reject) => {
      try {
        await this.storage.set('login-status', false);
        resolve('You have successfully logged out!');
      } catch (error) {
        reject(error);
      }
    });
  }
  public getLoginStatus(): Promise<any> {
    return this.storage.get('login-status');
  }
  public async checkLoginStatus() {
    try {
      const status = await this.getLoginStatus();
      this._USER_STATE = !!status;
    } catch (error) {
      this._USER_STATE = false;
    }
  }
}
