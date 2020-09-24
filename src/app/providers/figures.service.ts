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
		this.http.get(this.app.API_FIGURES).toPromise().then((res: any) => {
			this.figures = res.data;
		}).catch((error) => {
			console.log('error---', error);
		});
	}
}
