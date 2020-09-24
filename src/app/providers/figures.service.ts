import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable({
	providedIn: 'root'
})

export class FiguresService {
	public figures = [];
	constructor(
		private app: AppService,
		private http: HttpClient
	) {
		this.getFigures();
	 }

	public getFigures() {
		console.log('figuring...');
		this.http.get(this.app.API_FIGURES).toPromise().then((res) => {
			console.log(res);
		}).catch((error) => {
			console.log('error---', error);
		});
	}
}
