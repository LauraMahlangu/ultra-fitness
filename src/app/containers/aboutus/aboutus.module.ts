import { AboutusRoutingModule } from './aboutus-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';



@NgModule({
  declarations: [AboutusComponent],
  imports: [
    CommonModule,
    AboutusRoutingModule
  ],
  exports: [
   AboutusComponent
  ]
 
})
export class AboutusModule { }
