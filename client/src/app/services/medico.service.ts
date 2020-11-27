import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../models/Medico';

@Injectable({
  providedIn: 'root'
})

export class MedicoService {
  constructor(private http: HttpClient ) { }
  BASEURL = "http://localhost:1234/";

  cadastrar(medico: Medico): Observable<Medico>{
    return this.http.post<Medico>(this.BASEURL+"medico/cadastrar",medico);
  }
  ObterTodos(): Observable<Medico[]>{
    return this.http.get<Medico[]>(this.BASEURL+"medico/listar");
  }

}
