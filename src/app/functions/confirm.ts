import { AlertController } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';

export class Confirm {
	private alertController;
	constructor() {
		this.alertController = new AlertController();
	 }

	public present(message: string, header?): Observable<any> {
		const response = new Subject<any>();
		const create = async () => {
			const alert = await this.alertController.create({
				header: (header) ? header : 'Confirm!',
				message,
				buttons: [
					{
						text: 'Cancel',
						role: 'cancel',
						cssClass: 'secondary',
						handler: () => {
							response.next(false);
						}
					},
					{
						text: 'Confirm',
						handler: () => {
							response.next(true);
						}
					}
				]
			});
			await alert.present();
		};
		create();
		return response.asObservable();
	}
}
