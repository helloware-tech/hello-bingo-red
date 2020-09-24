import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FigureDetailPage } from './figure-detail.page';

const routes: Routes = [
	{
		path: '',
		component: FigureDetailPage
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})

export class FigureDetailPageRoutingModule {}
