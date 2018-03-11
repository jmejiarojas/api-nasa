import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//Modules
import { MaterialModule } from './material/material.module';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Services
import { NasaApiService } from './shared/services/nasa-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [NasaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
