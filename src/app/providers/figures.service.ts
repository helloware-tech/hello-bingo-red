import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Figure } from '../interfaces/figure';
import { AppService } from './app.service';

@Injectable({
	providedIn: 'root'
})

export class FiguresService {
	public figures: Array<Figure> = [];
	public groups: Array<any> = [];

	constructor(
		private app: AppService,
		private http: HttpClient,
	) {
		setTimeout(() => {
			this.getFigures();
			this.getGroupsFigures();
		}, 2000);
	}

	public getGroupsFigures() {
		this.http.get(this.app.API_GROUP_FIGURES).toPromise().then((res: any) => {
			this.groups = res.data;
		}).catch((error) => {
			console.log('error---', error);
		});
	}
	public getFigures() {
		return new Promise((resolve, reject) => {
			const response = new Subject<any>();
			if (this.figures.length > 0) {
				resolve(this.figures);
			} else {
				this.getFiguresFromHttp().then((res: any) => {
					this.figures = res.data;
					resolve(this.figures);
				}).catch((error) => {
					reject(error);
				});
			}
		});
	}
	public getFiguresFromHttp() {
		return this.http.get(this.app.API_FIGURES).toPromise();
	}
	public createFigure(data): any {
		return new Promise(async (resolve, reject) => {
			try {
				await this.http.post(this.app.API_FIGURES, data).toPromise();
				resolve('The figure has been created!');
			} catch (error) {
				reject(error);
			}
		});
	}
	public updateFigure(id: number, data): any {
		return new Promise(async (resolve, reject) => {
			try {
				await this.http.put(`${this.app.API_FIGURES}/${id}`, data).toPromise();
				resolve('The figure has been updated');
			} catch (error) {
				reject(error);
			}
		});
	}
	public deleteFigure(id: number): Promise<any> {
		return new Promise((resolve) => {
			for (const [i, figure] of this.figures.entries()) {
				if (figure.id === id) {
					resolve('The figure has been deleted');
					this.figures.splice(i, 1);
				}
			}
		});
	}
}
