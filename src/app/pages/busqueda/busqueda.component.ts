import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.sass']
})
export class BusquedaComponent implements OnInit {

  personajes: any;
  name: String;

  constructor(protected dataService: DataApiService) { }

  ngOnInit() {
  }

  search() {
    this.dataService.getPeople(this.name).subscribe(data => {
      this.personajes = data["results"];
    },
      (error) => {
        console.error(error);
      });
  }
}
