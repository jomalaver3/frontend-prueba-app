import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


export interface Profesor {
  id: string;
  nombre: string;
  materias: string[];
}

@Injectable({ providedIn: 'root' })
export class ProfesoresService {
  constructor(private http: HttpClient) {}

  getProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(`${environment.apiUrl}/materiasprofesores/profesores`);
  }
}