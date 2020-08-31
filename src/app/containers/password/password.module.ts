import { PasswordRoutingModule } from './password-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password.component';



@NgModule({
  declarations: [PasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PasswordRoutingModule
  ]
})
export class PasswordModule { }
