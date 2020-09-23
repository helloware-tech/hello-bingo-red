import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
          },
        ]
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            loadChildren: () => import('../users/users.module').then(m => m.UsersPageModule)
          }
        ]
      },
      {
        path: 'figures',
        children: [
          {
            path: '',
            loadChildren: () => import('../figures/figures.module').then(m => m.FiguresPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

