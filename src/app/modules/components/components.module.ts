import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModulesModule } from '../material-modules/material-modules.module';
import { IonicModule } from '@ionic/angular';
import { TopBarComponent } from '../../components/top-bar/top-bar.component';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		MaterialModulesModule,
	],
	declarations: [
		TopBarComponent
	],
	exports: [
		TopBarComponent
	],
})

export class ComponentsModule { }
