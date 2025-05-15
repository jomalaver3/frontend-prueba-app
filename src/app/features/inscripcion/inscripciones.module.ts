import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { InscripcionFormComponent } from './inscripcion-form/inscripcion-form.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    InscripcionFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    InscripcionFormComponent
  ]
})
export class InscripcionesModule { }
