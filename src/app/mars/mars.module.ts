import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarsComponent } from './mars/mars.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [MarsComponent]
})
export class MarsModule { }
