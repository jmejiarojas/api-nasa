import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

//Modules Material
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatSelectModule
}
  from '@angular/material';

//Component
import {MaterialDemoComponent} from './material-demo/material-demo.component';
import {MaterialButtonComponent} from './material-button/material-button.component';
import {MaterialInputComponent} from './material-input/material-input.component';
import { MaterialListComponent } from './material-list/material-list.component';
import { ItemEstudianteComponent } from './material-list/item-estudiante/item-estudiante.component';



@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    FormsModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    FormsModule
  ],
  declarations: [MaterialDemoComponent, MaterialButtonComponent, MaterialInputComponent, MaterialListComponent, ItemEstudianteComponent]
})
export class MaterialModule {}
