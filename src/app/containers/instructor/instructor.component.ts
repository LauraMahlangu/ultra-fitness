import { UserService } from './../../services/user.service';
import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {

	public instructors = [];
	public instructor = null;
	public sessions = [];
	public availability = [];

  constructor(private readonly dashService: DashboardService) { }

  ngOnInit(): void {

	this.dashService.fetchData()
	.subscribe(data => {

		data.users.forEach((userElement: User) => {
			if(userElement.role === 'INSTRUCTOR') {
				this.instructors.push(userElement);
			}
		});
	});

  }

	public book(user: any): void {
		this.instructor = user;
		this.training(user.id)
	}

	public training(instructorId: number): void {
		this.dashService.fetchData()
		.subscribe(data => {
			
		  data.instructorSessions.forEach(element => {
			if(element.userId === instructorId){
			  this.sessions.push(element);
			}
		  });
		 
		  data.instructorSessionAvailibity.forEach(element => {
			if(element.userId === instructorId){
			  this.availability = element.avaible;
			}
		  });
		  
		});
	}

}
