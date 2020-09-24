import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedOut } from './guards/is-logged-out.guard';
import { IsLogged } from './guards/is-logged.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
		canActivate: [IsLoggedOut]
	},
	{
		path: 'app',
		loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule),
		canActivate: [IsLogged]
	},
	{
		path: 'account',
		loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
		canActivate: [IsLogged]
	},
	{
		path: 'user-detail',
		loadChildren: () => import('./pages/user-detail/user-detail.module').then( m => m.UserDetailPageModule)
	},

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
