import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompanerosClaseService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMisCompaneros(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/CompanerosClase/mis-companeros`);
  }
}