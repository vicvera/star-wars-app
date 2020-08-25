import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { ResidentesComponent } from './pages/residentes/residentes.component';
import { BusquedaService } from './services/busqueda.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    BusquedaComponent,
    ResidentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BusquedaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
