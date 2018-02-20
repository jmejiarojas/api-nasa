import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules Material
import { MatToolbarModule, MatButtonModule, MatIconModule, MatExpansionModule } from '@angular/material';

//Component
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { MaterialButtonComponent } from './material-button/material-button.component';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ],
  declarations: [MaterialDemoComponent, MaterialButtonComponent]
})
export class MaterialModule { }
