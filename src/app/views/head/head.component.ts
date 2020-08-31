import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  
  public login: boolean;

  constructor(private readonly sharedService : SharedService,
	private router: Router) { }

  ngOnInit(): void {
    	this.sharedService.auth.subscribe((event: boolean )=> this.login = event);
  }

  public logout(): void {  
	localStorage.clear();
	this.sharedService.auth.next(false);
	this.router.navigate(['/']);
  }

}
