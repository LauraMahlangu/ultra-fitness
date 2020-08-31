import { Router } from '@angular/router';
import { User } from './../../models/user';
import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public course = [];
  public progress = [];
  public user: User;


  constructor(private readonly dashService: DashboardService,
    private readonly sharedService : SharedService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.sharedService.auth.next(true);

    this.user = JSON.parse(localStorage.getItem('user'));
    
    this.getUserCourse();    
  }

  public getUserCourse(){

    this.dashService.fetchData()
    .subscribe(data => {
      data.course.forEach(element => {
        if(element.userId === this.user.id){
          this.course.push(element);
        
        }
      });

      data.progress.forEach(element => {
        if(element.userId === this.user.id){
          this.progress.push(element);
        
        }
      });
      
    });
  }

  profile(): void {
    
    this.router.navigate(['/profile']);

  }
  

}
