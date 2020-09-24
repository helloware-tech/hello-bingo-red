import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { TestBed, async } from '@angular/core/testing';

import { MenuController } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	let menuSpy,
		routerSpy,
		userDataSpy,
		statusBarSpy,
		splashScreenSpy,
		swUpdateSpy,
		platformReadySpy,
		platformSpy,
		app,
		fixture;

	beforeEach(async(() => {
		menuSpy = jasmine.createSpyObj('MenuController', ['toggle', 'enable']);
		routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
		userDataSpy = jasmine.createSpyObj('UserData', ['isLoggedIn', 'logout']);
		statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
		splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
		swUpdateSpy = jasmine.createSpyObj('SwUpdate', ['available', 'activateUpdate']);
		platformReadySpy = Promise.resolve();
		platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });

		TestBed.configureTestingModule({
			declarations: [AppComponent],
			imports: [IonicStorageModule.forRoot()],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			providers: [
				{ provide: MenuController, useValue: menuSpy },
				{ provide: Router, useValue: routerSpy },
				{ provide: SwUpdate, useValue: swUpdateSpy },
			]
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		app = fixture.debugElement.componentInstance;
	});

	it('should create the app', () => {
		expect(app).toBeTruthy();
	});

	it('should initialize the app', async () => {
		expect(platformSpy.ready).toHaveBeenCalled();
		await platformReadySpy;
		expect(statusBarSpy.styleDefault).toHaveBeenCalled();
		expect(splashScreenSpy.hide).toHaveBeenCalled();
	});
});
