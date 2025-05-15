import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,


    LoginComponent,

    FormsModule,
    RouterModule.forChild([
      { path: '', component: LoginComponent }
    ])
  ]
})
export class AuthModule { }