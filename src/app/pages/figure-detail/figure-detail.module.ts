import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FigureDetailPageRoutingModule } from './figure-detail-routing.module';
import { FigureDetailPage } from './figure-detail.page';
import { ComponentsModule } from '../../modules/components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		FigureDetailPageRoutingModule,
		ComponentsModule
	],
	declarations: [FigureDetailPage]
})

export class FigureDetailPageModule {}
