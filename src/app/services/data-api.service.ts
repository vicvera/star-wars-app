import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  allPeople: any;

  constructor(protected http: HttpClient) { }

  //endpoint que recibe de parametro el nombre del personaje
  getPeople(nombre: String) {
    return this.http.get('https://swapi.dev/api/people/?search=' + nombre);
  }

  getAllPeople(page: number) {
    return this.http.get('https://swapi.dev/api/people/?page=' + page);
  }

  getAllPlanets(page: number) {
    return this.http.get('https://swapi.dev/api/planets/?page=' + page);
  }

  getPlanet(url: string) {
    return this.http.get(url);
  }

  getResident(url: string) {
    return this.http.get(url);
  }
}
