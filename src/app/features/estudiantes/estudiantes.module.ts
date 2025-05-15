import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EstudiantesListComponent } from './estudiantes-list/estudiantes-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [EstudiantesListComponent],
  imports: [
     CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterModule.forChild([
      { path: '', component: EstudiantesListComponent }
    ])
  ],
  exports:[EstudiantesListComponent]
})
export class EstudiantesModule {}
