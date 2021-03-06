import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';
import { UsersPageModule } from '../users/users.module';
import { DashboardPageModule } from '../dashboard/dashboard.module';
import { FiguresPageModule } from '../figures/figures.module';
import { ComponentsModule } from '../../modules/components/components.module';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		TabsPageRoutingModule,
		DashboardPageModule,
		UsersPageModule,
		FiguresPageModule,
		ComponentsModule
	],
	declarations: [
		TabsPage,
	]
})
export class TabsModule { }
