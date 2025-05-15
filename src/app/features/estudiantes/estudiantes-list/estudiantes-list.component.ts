import { Component, OnInit } from '@angular/core';
import { Estudiante, EstudianteService } from '../../../core/services/estudiante.service';

@Component({
  selector: 'app-estudiantes-list',
  templateUrl: './estudiantes-list.component.html',
  standalone:false
})
export class EstudiantesListComponent implements OnInit {
  estudiantes: Estudiante[] = [];
  loading = true;

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit() {
    this.estudianteService.getEstudiantes().subscribe({
      next: data => {
        this.estudiantes = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
}