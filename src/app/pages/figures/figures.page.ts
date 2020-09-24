import { Component, OnInit } from '@angular/core';
import { FiguresService } from '../../providers/figures.service';

@Component({
	selector: 'app-figures',
	templateUrl: './figures.page.html',
	styleUrls: ['./figures.page.scss'],
})

export class FiguresPage implements OnInit {

	constructor(
		public figuresService: FiguresService
	) { }

	ngOnInit() {
	}

}
