import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;
  public validUser = false;
  public showError = false;
  public user: User;

  constructor(
    private readonly router: Router, 
    private readonly fb: FormBuilder,
    private readonly userService: UserService) { }

  ngOnInit(): void {
    
    this.formGroup = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }

  get email(): AbstractControl {
    return this.formGroup.get("email");
  }


  get password(): AbstractControl {
    return this.formGroup.get("password");
  }


  public login(): void {

    this.userService.login()
    .subscribe(data => {

        data.users.forEach((userElement: User) => {
            
          if(this.validateUser(userElement)) {
            localStorage.setItem('user', JSON.stringify(userElement));
            this.validUser = true;
          }

        });

        if(this.validUser) {
          this.router.navigate(['/dashboard']);
        }else {
          this.showError = true;
        }
    });
     
  }

  public validateUser(user: User): boolean {
    let valid = false;

    if(user.email === this.email.value && user.password === this.password.value) {
      valid = true;
    }

    return valid;
  }

}
