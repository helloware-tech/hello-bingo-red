import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiguresPage } from './figures.page';

describe('FiguresPage', () => {
  let component: FiguresPage;
  let fixture: ComponentFixture<FiguresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiguresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiguresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
