import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CompanerosListComponent } from './companeros-list/companeros-list.component';
import { CompanerosClaseComponentComponent } from './companeros-clase-component/companeros-clase-component.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [CompanerosListComponent, CompanerosClaseComponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: CompanerosListComponent }
    ]),
     CommonModule,
    MatCardModule,
    MatListModule
  ],
  exports:[CompanerosListComponent,CompanerosClaseComponentComponent ]
})
export class CompanerosModule {}