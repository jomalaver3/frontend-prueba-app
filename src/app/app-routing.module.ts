import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { InscripcionFormComponent } from './features/inscripcion/inscripcion-form/inscripcion-form.component';
import { InscripcionesModule } from './features/inscripcion/inscripciones.module';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'estudiantes', loadChildren: () => import('./features/estudiantes/estudiantes.module').then(m => m.EstudiantesModule), canActivate: [AuthGuard] },
  { path: 'materias', loadChildren: () => import('./features/materias/materias.module').then(m => m.MateriasModule), canActivate: [AuthGuard] },
  { path: 'profesores', loadChildren: () => import('./features/profesores/profesores.module').then(m => m.ProfesoresModule), canActivate: [AuthGuard] },
/*   { path: 'inscripcion', loadChildren: () => import('./features/inscripcion/inscripciones.module').then(m => m.InscripcionesModule), canActivate: [AuthGuard] },
 */  { path: 'inscripcion', component: InscripcionFormComponent },
  { path: 'companeros', loadChildren: () => import('./features/companeros/conpaneros.module').then(m => m.CompanerosModule), canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }