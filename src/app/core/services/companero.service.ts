import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export interface CompaneroClase {
  estudianteId: string;
  nombre: string;
}

export interface MateriaConCompaneros {
  materiaId: string;
  materiaNombre: string;
  companeros: CompaneroClase[];
}

@Injectable({ providedIn: 'root' })
export class CompanerosService {
  constructor(private http: HttpClient) {}

  getMateriasConCompaneros(estudianteId: string): Observable<MateriaConCompaneros[]> {
    return this.http.get<MateriaConCompaneros[]>(`${environment.apiUrl}/companeros/${estudianteId}`);
  }
}