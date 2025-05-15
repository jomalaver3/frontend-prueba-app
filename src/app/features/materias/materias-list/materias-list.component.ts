import { Component, OnInit } from '@angular/core';
import { Materia, MateriasService } from '../../../core/services/materia.service';


@Component({
  selector: 'app-materias-list',
  templateUrl: './materias-list.component.html',
  standalone:false
})
export class MateriasListComponent implements OnInit {
  materias: Materia[] = [];
  loading = true;

  constructor(private materiasService: MateriasService) {}

  ngOnInit() {
    this.materiasService.getMaterias().subscribe({
      next: data => {
        this.materias = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
}