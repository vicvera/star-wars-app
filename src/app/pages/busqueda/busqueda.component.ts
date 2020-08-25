import { Component, OnInit } from '@angular/core';
import { BusquedaService } from 'src/app/services/busqueda.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.sass']
})
export class BusquedaComponent implements OnInit {

  personajes: any;
  name: String;

  constructor(protected busquedaService: BusquedaService) { }

  ngOnInit() {
  }

  search() {
    this.busquedaService.getPeople(this.name).subscribe(data => { // Success
      console.log("Esto trae data::: ", data);
      this.personajes = data["results"];
    },
      (error) => {
        console.error(error);
      });
  }
}
