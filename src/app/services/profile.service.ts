import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from 'src/app/interfaces/pessoa'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  api = 'http://localhost:3000/profiles';
  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.api)
  }
}
