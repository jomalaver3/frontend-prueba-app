import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


export interface Materia {
  id: string;
  nombre: string;
  profesorId: string;
  profesorNombre: string;
}

export interface Profesor {
  id: string;
  nombre: string;
  materias: string[];
}
@Injectable({
  providedIn: 'root'
})
export class MateriasProfesoresService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMaterias(): Observable<Materia[]> {
    return this.http.get<Materia[]>(`${this.apiUrl}/MateriasProfesores/materias`);
  }

  getProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(`${this.apiUrl}/MateriasProfesores/profesores`);
  }
}
