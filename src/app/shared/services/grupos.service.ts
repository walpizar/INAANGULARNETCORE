import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Grupo from '../Models/Grupo';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  constructor(private http: HttpClient) { 

  }


  getAll(): Observable<any>
  {
    return this.http.get<Grupo[]>(`${environment.url}grupo`);
    
  }
}
