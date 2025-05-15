import { Component } from '@angular/core';
import { CompanerosClaseService } from '../../../core/services/companeros-clase.service';

@Component({
  selector: 'app-companeros-clase-component',
  standalone: false,
  templateUrl: './companeros-clase-component.component.html',
  styleUrl: './companeros-clase-component.component.scss'
})
export class CompanerosClaseComponentComponent {
companerosPorMateria: any[] = [];
  loading = true;

  constructor(private companerosClaseService: CompanerosClaseService) {}

  ngOnInit() {
    this.companerosClaseService.getMisCompaneros().subscribe({
      next: data => {
        this.companerosPorMateria = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
}


