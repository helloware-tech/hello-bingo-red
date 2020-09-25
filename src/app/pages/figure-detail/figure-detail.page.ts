import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tools } from '../../functions';
import { FiguresService } from '../../providers/figures.service';

@Component({
	selector: 'app-figure-detail',
	templateUrl: './figure-detail.page.html',
	styleUrls: ['./figure-detail.page.scss'],
})

export class FigureDetailPage extends Tools implements OnInit {
	public options: Array<boolean> = [];
	public name = '';
	public group;
	constructor(
		private modalController: ModalController,
		public figuresService: FiguresService
	) {
		super();
	 }

	ngOnInit() {
		this.loadOptions();
	}

	public createFigure() {
		if (this.name === '') {
			return this.toast.present('Debe llenar el formulario');
		}
		if (this.group === undefined) {
			return this.toast.present('Debe seleccionar un grupo');
		}
		this.confirm.present('Ready to create a new Figure?').subscribe((res) => {
			if (res) {
				const data = {
					idFigureGroup: this.group,
					figureName: this.name,
					positions: this.getOptions(),
				};
				this.figuresService.createFigure(data);
			}
		});
	}
	public closeModal() {
		this.modalController.dismiss();
	}
	public getOptions() {
		const response = [];
		for (const option of this.options) {
			response.push((option === true) ? 1 : 0);
		}
		return response;
	}
	public loadOptions() {
		for (let i = 0; i < 25; i++) {
			this.options.push(false);
		}
		this.options[12] = null;
	}
	public changeItem(state: boolean, position: number) {
		this.options[position] = state;
	}
	public columns() {
		const columns: Array<Array<any>> = [[], [], [], [], []];
		for (let i = 0; i < 5; i++) {
			for (let j = 0; j < 5; j++) {
				const index = (i * 5) + j;
				columns[i].push(this.options[index]);
			}
		}
		return columns;
	}
}
