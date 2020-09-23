import { Injectable } from '@angular/core';
import { MyRoute } from '../interfaces/my-route';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  readonly dashboard: MyRoute = {
    title: 'Dashboard',
    name: 'dashboard',
    url: '/app/dashboard',
    icon: 'flash'
  };

  readonly users: MyRoute = {
    title: 'Users',
    name: 'users',
    url: '/app/users',
    icon: 'people'
  };

  readonly figures: MyRoute = {
    title: 'Figures',
    name: 'figures',
    url: '/app/figures',
    icon: 'grid'
  };

  readonly primaries = [
    this.dashboard,
    this.users,
    this.figures,
  ];
  constructor() { }
}
