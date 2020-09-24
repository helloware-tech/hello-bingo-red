import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  public goToAccount() {
    this.router.navigateByUrl('/account');
  }
  public photoURL(): string {
    return 'https://www.gravatar.com/avatar?d=mm&s=140';
  }
  public displayName(): string {
    return 'Roberto  Quintero';
  }
  public email(): string {
    return 'rcql7275@gmail.com';
  }
}
