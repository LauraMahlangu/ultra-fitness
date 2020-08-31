import { Router } from '@angular/router';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { DashboardService } from 'src/app/services/dashboard.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
 
  public user: User;
  public requestList = [];

  constructor(private readonly userService: UserService,
    private readonly sharedService : SharedService,
    private readonly dashService: DashboardService,
    private readonly router: Router) { }

	ngOnInit(): void {

		this.sharedService.auth.next(true);
    this.user = JSON.parse(localStorage.getItem('user'));
    
    this.dashService.fetchData()
    .subscribe(data => {
  
      data.instructorRequest.forEach((userElement: any) => {
        if(userElement.userId === this.user.id) {
          this.requestList.push(userElement);
        }
      });
    });

	}

}
