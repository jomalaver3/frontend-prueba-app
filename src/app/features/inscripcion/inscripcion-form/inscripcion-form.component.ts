import { Component, OnInit } from '@angular/core';
import { Materia, MateriasProfesoresService } from '../../../core/services/materias-profesores.service';
import { EstudianteService } from '../../../core/services/estudiante.service';



@Component({
  selector: 'app-inscripcion-form',
  standalone: false,
  templateUrl: './inscripcion-form.component.html',
  styleUrl: './inscripcion-form.component.scss'
})
export class InscripcionFormComponent implements OnInit {
  estudianteId: string = '';
  materias: Materia[] = [];
  seleccionadas: string[] = [];
  error: string = '';
  loading = false;

  constructor(
    private materiasProfesoresService: MateriasProfesoresService,
    private estudianteService: EstudianteService
  ) { }

  ngOnInit() {
    this.materiasProfesoresService.getMaterias().subscribe(materias => {
      this.materias = materias;
    });
  }
  onCheckboxChange(event: any, materiaId: string) {
    if (event.checked) {
      // Validar que no se repita profesor
      const profesorActual = this.materias.find(m => m.id === materiaId)?.profesorId;
      const profesoresSeleccionados = this.seleccionadas
        .map(id => this.materias.find(m => m.id === id)?.profesorId);

      if (profesoresSeleccionados.includes(profesorActual)) {
        this.error = 'No puedes seleccionar materias con el mismo profesor.';
        // Desmarcar el checkbox manualmente
        event.source.checked = false;
        return;
      }
      if (this.seleccionadas.length >= 3) {
        this.error = 'Solo puedes seleccionar 3 materias.';
        event.source.checked = false;
        return;
      }
      this.seleccionadas.push(materiaId);
      this.error = '';
    } else {
      this.seleccionadas = this.seleccionadas.filter(id => id !== materiaId);
      this.error = '';
    }
  }


  inscribir() {
    if (this.seleccionadas.length !== 3) {
      this.error = 'Debes seleccionar exactamente 3 materias.';
      return;
    }
    this.loading = true;
    this.estudianteService.inscribirMaterias(this.estudianteId, this.seleccionadas).subscribe({
      next: () => {
        this.loading = false;
        this.error = '';
        alert('Inscripción exitosa');
      },
      error: () => {
        this.loading = false;
        this.error = 'Error al inscribir materias';
      }
    });
  }
}