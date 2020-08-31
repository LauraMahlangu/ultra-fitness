import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeGuardService {

  constructor(public router: Router) { }

	canActivate(): boolean {
	
		const user = JSON.parse(localStorage.getItem('user'));
		
		if(user) {
			this.router.navigate(['/dashboard']);
			return false;
    }

    return true;
		
		
	}
}
