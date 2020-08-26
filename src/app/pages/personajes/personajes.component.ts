import { Component, OnInit, ViewChild } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.sass']
})
export class PersonajesComponent implements OnInit {

  columnas: string[] = ['nombre', 'peso', 'estatura'];
  
  dataSource = null;
  
  personajes: Object[] = [];
  pages: number[] = [1, 2, 3, 4, 5];
  path: string[];
  order: number;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(protected dataService: DataApiService) {
  }

  ngOnInit() { 
    for (let page of this.pages) {
      this.dataService.getAllPeople(page).subscribe(data => {
        for(let objeto of data["results"]){
          this.personajes.push(objeto);
          this.dataSource = new MatTableDataSource<Object>(this.personajes);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
        (error) => {
          console.error(error);
        });
    };
  }
}