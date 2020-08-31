import { InstructorComponent } from './instructor.component';
import { InstructorRoutingModule } from './instructor-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [InstructorComponent],
  imports: [
    CommonModule,
    InstructorRoutingModule,
  ],
  exports: [
    InstructorComponent

  ]
})
export class InstructorModule { }
