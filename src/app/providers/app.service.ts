import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class AppService {

	readonly API_LOGIN = 'https://java.bocetos.co/userred-0.0.1-SNAPSHOT/auth';
	readonly API_PROFILE = 'https://java.bocetos.co/userred-0.0.1-SNAPSHOT/myprofile';
	readonly API_GROUP_FIGURES = 'https://java.bocetos.co/gamered-0.0.1-SNAPSHOT/groupfigure';
	readonly API_FIGURES = 'https://java.bocetos.co/gamered-0.0.1-SNAPSHOT/figure';

	constructor() { }
}
