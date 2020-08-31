import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  public formGroup: FormGroup;
  public validUser = false;
  public showError = false;
  public user: User;

  constructor(private readonly router: Router, 
    private readonly fb: FormBuilder,
    private readonly userService: UserService
    ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required]]
    });
  }

  get email(): AbstractControl {
    return this.formGroup.get("email");
  }

}
