import { ToastController } from '@ionic/angular';

export class Toast {
	private toastController;
	constructor() {
		this.toastController = new ToastController();
	 }

	public async present(
		message: string,
		duration?: number,
		position?: 'bottom' | 'middle' | 'top'
	)  {
		const toast = await this.toastController.create({
			message,
			duration: duration || 3000,
			position: position || 'bottom',
		});
		toast.present();
	}
}
