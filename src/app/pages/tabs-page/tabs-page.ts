import { Component } from '@angular/core';
import { MyRoute } from '../../interfaces/my-route';
import { RoutesService } from '../../providers/routes.service';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  public pages: Array<MyRoute> = [];

  constructor(public routes: RoutesService) {
    this.pages = this.routes.primaries;
  }
}
