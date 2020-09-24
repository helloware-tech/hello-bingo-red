import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login';
import { LoginPageRoutingModule } from './login-routing.module';
import { MaterialModulesModule } from '../../modules/material-modules/material-modules.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IonicModule,
		LoginPageRoutingModule,
		MaterialModulesModule
	],
	declarations: [
		LoginPage,
	]
})
export class LoginModule { }
