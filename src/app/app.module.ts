import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './auth/login/login.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout/layout.component';

import { EstudiantesModule } from './features/estudiantes/estudiantes.module';
import { MateriasModule } from './features/materias/materias.module';
import { CompanerosModule } from './features/companeros/conpaneros.module';
import { ProfesoresModule } from './features/profesores/profesores.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InscripcionesModule } from './features/inscripcion/inscripciones.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ProfesoresModule,
    EstudiantesModule,
    CompanerosModule,
    MateriasModule,
    LoginComponent,
    LayoutComponent,
    InscripcionesModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


