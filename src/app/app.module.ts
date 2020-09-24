import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModulesModule } from './modules/material-modules/material-modules.module';
import { HttpInterceptorService } from './interceptors/http-interceptor.service';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		IonicModule.forRoot(),
		IonicStorageModule.forRoot(),
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production
		}),
		BrowserAnimationsModule,
		MaterialModulesModule
	],
	declarations: [AppComponent],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpInterceptorService,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
