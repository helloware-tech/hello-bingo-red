import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FiguresPageRoutingModule } from './figures-routing.module';
import { FiguresPage } from './figures.page';
import { ComponentsModule } from '../../modules/components/components.module';
import { FigureDetailPageModule } from '../figure-detail/figure-detail.module';
import { MaterialModulesModule } from '../../modules/material-modules/material-modules.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		FiguresPageRoutingModule,
		FigureDetailPageModule,
		ComponentsModule,
		MaterialModulesModule
	],
	declarations: [
		FiguresPage
	],
})

export class FiguresPageModule {}
