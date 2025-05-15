import { Component, OnInit } from '@angular/core';
import { Profesor, ProfesoresService } from '../../../core/services/profesores.service';


@Component({
  selector: 'app-profesores-list',
  standalone: false,
  templateUrl: './profesores-list.component.html',
  styleUrl: './profesores-list.component.scss'
})
export class ProfesoresListComponent implements OnInit {
  profesores: Profesor[] = [];
  loading = true;

  constructor(private profesoresService: ProfesoresService) {}

  ngOnInit() {
    this.profesoresService.getProfesores().subscribe({
      next: data => {
        this.profesores = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
}