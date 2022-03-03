import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Horario from '../Models/Horario';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(private http: HttpClient) { 

  }


  getAll(): Observable<any>
  {
    return this.http.get<Horario[]>(`${environment.url}horario`);
    
  }
}
