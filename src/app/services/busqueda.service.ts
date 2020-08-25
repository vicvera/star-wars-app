import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  constructor(protected http: HttpClient) { }

  getPeople(nombre: String) {
    return this.http.get('https://swapi.dev/api/people/?search=' + nombre);
  }
}
