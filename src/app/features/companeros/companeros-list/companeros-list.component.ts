import { Component } from '@angular/core';
import { CompanerosService,MateriaConCompaneros } from '../../../core/services/companero.service';

@Component({
  selector: 'app-companeros-list',
  templateUrl: './companeros-list.component.html',
  standalone:false
})
export class CompanerosListComponent {
  estudianteId = '';
  materias: MateriaConCompaneros[] = [];
  error = '';

  constructor(private companerosService: CompanerosService) {}

  buscarCompaneros() {
    if (!this.estudianteId) {
      this.error = 'Debes ingresar el ID del estudiante';
      return;
    }
    this.companerosService.getMateriasConCompaneros(this.estudianteId).subscribe({
      next: data => {
        this.materias = data;
        this.error = '';
      },
      error: err => {
        this.error = err.error?.message || 'Error al obtener compañeros';
        this.materias = [];
      }
    });
  }
}