import { AboutusModule } from './containers/aboutus/aboutus.module';
import { HeadModule } from './views/head/head.module';
import { FooterModule } from './views/footer/footer.module';
import { HomeModule } from './views/home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './containers/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    FooterModule,
    HeadModule
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
