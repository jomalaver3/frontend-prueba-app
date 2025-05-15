import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


export interface Materia {
  id: string;
  nombre: string;
  creditos: number;
  profesorNombre?: string;
}

@Injectable({ providedIn: 'root' })
export class MateriasService {
  constructor(private http: HttpClient) {}

  getMaterias(): Observable<Materia[]> {
    return this.http.get<Materia[]>(`${environment.apiUrl}/materiasprofesores/materias`);
  }
}