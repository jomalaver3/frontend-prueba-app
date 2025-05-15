import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export interface Estudiante {
  id: string;
  nombre: string;
  email: string;
  // otros campos según tu API
}

@Injectable({ providedIn: 'root' })
export class EstudianteService {
  constructor(private http: HttpClient) {}

  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${environment.apiUrl}/estudiantes`);
  }

  getEstudiante(id: string): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${environment.apiUrl}/estudiantes/${id}`);
  }

  createEstudiante(estudiante: Partial<Estudiante>): Observable<Estudiante> {
    return this.http.post<Estudiante>(`${environment.apiUrl}/Estudiantes`, estudiante);
  }

  updateEstudiante(id: string, estudiante: Partial<Estudiante>): Observable<Estudiante> {
    return this.http.put<Estudiante>(`${environment.apiUrl}/Estudiantes/${id}`, estudiante);
  }

  deleteEstudiante(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/Estudiantes/${id}`);
  }

  inscribirMaterias(id: string, materias: string[]): Observable<any> {
    return this.http.post(`${environment.apiUrl}/Estudiantes/${id}/inscribir-materias`, { materias });
  }

}





 