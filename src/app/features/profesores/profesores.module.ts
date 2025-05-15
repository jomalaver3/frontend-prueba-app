import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfesoresListComponent } from './profesores-list/profesores-list.component';



@NgModule({
  declarations: [ProfesoresListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProfesoresListComponent }
    ])
  ],
  exports: [ProfesoresListComponent]

})
export class ProfesoresModule { }


