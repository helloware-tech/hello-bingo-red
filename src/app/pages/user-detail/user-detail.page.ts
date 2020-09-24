import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/user';
import { UsersService } from '../../providers/users.service';

@Component({
	selector: 'app-user-detail',
	templateUrl: './user-detail.page.html',
	styleUrls: ['./user-detail.page.scss'],
})

export class UserDetailPage implements OnInit {
	public user: User = {
		name: {
			first: '',
			last: ''
		},
		picture: {
			large: '',
			thumbnail: ''
		},
		login: {
			username: '',
		},
		location: {
			country: '',
			city:  ''
		},
		phone: '',
		gender: '',
		email: '',
	};
	constructor(
		private route: ActivatedRoute,
		private usersService: UsersService
	) { }

	ngOnInit() {
	}

	ionViewWillEnter() {
		const userIndex = this.route.snapshot.paramMap.get('id');
		const interval = setInterval(() => {
			if (this.usersService.users.length > 1 && this.usersService.users.length > (parseFloat(userIndex) + 1)) {
				this.user = this.usersService.users[userIndex];
				clearInterval(interval);
			}
		}, 100);
	}

}
