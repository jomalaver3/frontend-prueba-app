import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InscripcionService {
  constructor(private http: HttpClient) {}

  inscribirMaterias(estudianteId: string, materiasIds: string[]): Observable<any> {
    return this.http.post(`${environment.apiUrl}/inscripcion/${estudianteId}`, { materiasIds });
  }
}