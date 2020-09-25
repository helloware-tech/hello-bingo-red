import { Component, Input, OnInit } from '@angular/core';
import { Tools } from '../../functions';
import { Figure } from '../../interfaces/figure';
import { FiguresService } from '../../providers/figures.service';

@Component({
	selector: 'app-figure',
	templateUrl: './figure.component.html',
	styleUrls: ['./figure.component.scss'],
})

export class FigureComponent extends Tools implements OnInit {
	public positions = [];
	public editing = false;

	@Input() data: Figure;

	constructor(
		private figuresService: FiguresService,
	) {
		super();
	}

	ngOnInit() {
		this.positions = this.data.positionsWinner;
	}

	public editFigure() {
		this.editing = true;
	}
	public deleteFigure() {
		this.confirm.present('Are you sure you want to delete this figure?', this.data.name).subscribe((res: boolean) => {
			if (res) {
				this.figuresService.deleteFigure(this.data.id)
				.then((message) => {
					this.toast.present(message);
				});
			}
		});
	}
	public updateFigure() {
		this.confirm.present('Are you sure you want to update this figure?', this.data.name).subscribe((res: boolean) => {
			if (res) {
				const data = {
					figureName: this.data.name,
					idFigureGroup: this.data.groupFigureId.id,
					positions: this.positions
				};
				this.figuresService.updateFigure(this.data.id, data).then((message) => {
					this.toast.present(message);
				});
				this.editing = false;
			}
		});
	}
	public changeItem(state: boolean, position: number) {
		this.positions[position] = state;
	}
	public columns() {
		const columns: Array<Array<any>> = [[], [], [], [], []];
		for (let i = 0; i < 5; i++) {
			for (let j = 0; j < 5; j++) {
				const index = (i * 5) + j;
				columns[i].push(this.positions[index]);
			}
		}
		return columns;
	}
}
