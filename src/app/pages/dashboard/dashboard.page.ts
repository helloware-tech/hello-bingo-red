import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../providers/users.service';
import { FiguresService } from '../../providers/figures.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    public usersService: UsersService,
    public figuresService: FiguresService
  ) { }

  ngOnInit() {
  }

}
