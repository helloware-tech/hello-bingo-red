import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FigureDetailPage } from './figure-detail.page';

describe('FigureDetailPage', () => {
  let component: FigureDetailPage;
  let fixture: ComponentFixture<FigureDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigureDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FigureDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
