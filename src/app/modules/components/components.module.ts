import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModulesModule } from '../material-modules/material-modules.module';
import { IonicModule } from '@ionic/angular';
import { TopBarComponent } from '../../components/top-bar/top-bar.component';
import { FigureComponent } from '../../components/figure/figure.component';
import { FigureItemComponent } from '../../components/figure-item/figure-item.component';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		MaterialModulesModule,
	],
	declarations: [
		TopBarComponent,
		FigureComponent,
		FigureItemComponent,
	],
	exports: [
		TopBarComponent,
		FigureComponent,
		FigureItemComponent,
	],
})

export class ComponentsModule { }
