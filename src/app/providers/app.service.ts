import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  readonly API_LOGIN = 'https://java.bocetos.co/userred-0.0.1-SNAPSHOT/auth';

  constructor() { }
}
