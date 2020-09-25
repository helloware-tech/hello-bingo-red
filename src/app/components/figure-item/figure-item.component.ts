import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-figure-item',
	templateUrl: './figure-item.component.html',
	styleUrls: ['./figure-item.component.scss'],
})

export class FigureItemComponent implements OnInit {
	@Input() state: boolean | null;
	@Output() change = new EventEmitter<any>();

	constructor() { }

	ngOnInit() {}

	public classes() {
		switch (this.state) {
			case true:
				return 'bg-primary';
			case false:
				return 'bg-medium';
			default:
				return 'bg-danger';
		}
	}
	public toggle() {
		if (this.state !== null) {
			this.change.emit(!this.state);
		}
	}
}
