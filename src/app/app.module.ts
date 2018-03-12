import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//Modules
import { MaterialModule } from './material/material.module';
import { MarsModule } from './mars/mars.module';
import { HttpClientModule } from '@angular/common/http';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Services
import { NasaApiService } from './shared/services/nasa-api.service';

//Pipes
import { LowerCasePipe } from './shared/pipes/lower-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LowerCasePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MarsModule
  ],
  providers: [NasaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
