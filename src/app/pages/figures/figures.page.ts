import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Figure } from '../../interfaces/figure';
import { FiguresService } from '../../providers/figures.service';
import { FigureDetailPage } from '../figure-detail/figure-detail.page';

@Component({
	selector: 'app-figures',
	templateUrl: './figures.page.html',
	styleUrls: ['./figures.page.scss'],
})

export class FiguresPage implements OnInit {
	public figures: Array<Figure> = [];

	constructor(
		public figuresService: FiguresService,
		public modalController: ModalController
	) { }

	ngOnInit() { }

	ionViewWillEnter() {
		this.loadFigures();
	}

	public loadFigures() {
		this.figuresService.getFigures().then((figures: any) => {
			this.figures = figures;
		});
	}
	async openModal() {
		const modal = await this.modalController.create({
		  component: FigureDetailPage,
		});
		return await modal.present();
	  }
}
