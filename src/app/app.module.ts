import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http'
import { HomeModule } from './home/home.module';
import { GlobalInterceptors } from './providers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [
    GlobalInterceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
