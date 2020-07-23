import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DeviceDetectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
