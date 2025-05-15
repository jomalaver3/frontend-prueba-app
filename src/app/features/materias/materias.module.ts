import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MateriasListComponent } from './materias-list/materias-list.component';

@NgModule({
  declarations: [MateriasListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MateriasListComponent }
    ])
  ],
  exports:[MateriasListComponent]
})
export class MateriasModule {}