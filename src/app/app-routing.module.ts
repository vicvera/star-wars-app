import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { ResidentesComponent } from './pages/residentes/residentes.component';


const routes: Routes = [
  { path: 'personajes', component: PersonajesComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'residentes', component: ResidentesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
