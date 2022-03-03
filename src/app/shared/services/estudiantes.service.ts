import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Estudiante from '../Models/Estudiantes';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private http: HttpClient) { 

  }


  getAll(): Observable<any>
  {
    return this.http.get<Estudiante[]>(`${environment.url}estudiante`);
    
  }

  eliminar(estudiante: Estudiante): Observable<any>
  {

    return this.http.delete<any>(`${environment.url}estudiante/${estudiante.Id}`);
    
  }

  
  save(estudiante: Estudiante): Observable<Estudiante>
  {
 
    return this.http.post<Estudiante>(`${environment.url}estudiante/post`,estudiante);
    
  }

  update(estudiante: Estudiante): Observable<Estudiante>
  {
    console.log(estudiante);
    return this.http.patch<Estudiante>(`${environment.url}estudiante/${estudiante.Id}`,estudiante);
    
  }



}
