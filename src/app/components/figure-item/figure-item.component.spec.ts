import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FigureItemComponent } from './figure-item.component';

describe('FigureItemComponent', () => {
	let component: FigureItemComponent;
	let fixture: ComponentFixture<FigureItemComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ FigureItemComponent ],
			imports: [IonicModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(FigureItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
