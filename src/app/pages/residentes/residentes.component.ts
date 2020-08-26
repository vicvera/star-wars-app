import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-residentes',
  templateUrl: './residentes.component.html',
  styleUrls: ['./residentes.component.sass']
})
export class ResidentesComponent implements OnInit {

  pages: number[] = [1, 2, 3, 4, 5, 6];

  planetas: Object[] = [];

  planet: any;

  residents: Object[] = [];

  constructor(protected dataService: DataApiService) { }

  ngOnInit() {
    for (let page of this.pages) {
      this.dataService.getAllPlanets(page).subscribe(data => {
        for (let objeto of data["results"]) {
          this.planetas.push(objeto);
        }
      },
        (error) => {
          console.error(error);
        });
    };
  }

  getResidentes(url: any) {
    this.residents = [];
    this.dataService.getPlanet(url).subscribe(data => {
      for (let url of data["residents"]) {
        this.dataService.getResident(url).subscribe(data => {
          this.residents.push(data);
        },
          (error) => {
            console.error(error);
          });
        }
      },
      (error) => {
        console.error(error);
      });
    console.log("Ya entro!", this.residents);
  }
}
