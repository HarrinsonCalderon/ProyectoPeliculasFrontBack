import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { ListadpGenericoComponent } from './utilidades/listadp-generico/listadp-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { IndiceCineComponent } from './cines/indice-cine/indice-cine.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component'

/*Formularios reactivos*/
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioGeneroComponent } from './generos/formulario-genero/formulario-genero.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';
import { FormularioActoresComponent } from './actores/formulario-actores/formulario-actores.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
import { InputMarkdownComponent } from './utilidades/input-markdown/input-markdown.component';
 
import {MarkdownModule} from 'ngx-markdown';
import { FormularioCinesComponent } from './cines/formulario-cines/formulario-cines.component';
import { FormularioPeliculaComponent } from './peliculas/formulario-pelicula/formulario-pelicula.component';


/*Binding de doble via */
import {FormsModule} from '@angular/forms';
import { SelectorMultipleComponent } from './utilidades/selector-multiple/selector-multiple.component';
import { AutocompleteActoresComponent } from './actores/autocomplete-actores/autocomplete-actores.component';


/* Para comunicarse con la api, necesito servicios*/
import {HttpClientModule} from '@angular/common/http';
import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component'

/**Para las alertas */
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AutorizadoComponent } from './seguridad/autorizado/autorizado.component';
import { SeguridadLoginComponent } from './seguridad-login/seguridad-login.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { AutenticacionComponent } from './seguridad/formulario/autenticacion/autenticacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    ListadpGenericoComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    IndiceGenerosComponent,
    CrearGeneroComponent,
    IndiceActoresComponent,
    CrearActorComponent,
    CrearPeliculaComponent,
    CrearCineComponent,
    IndiceCineComponent,
    EditarActorComponent,
    EditarGeneroComponent,
    EditarCineComponent,
    EditarPeliculaComponent,
    FormularioGeneroComponent,
    FiltroPeliculasComponent,
    FormularioActoresComponent,
    InputImgComponent,
    InputMarkdownComponent,
    FormularioCinesComponent,
    FormularioPeliculaComponent,
    SelectorMultipleComponent,
    AutocompleteActoresComponent,
    MostrarErroresComponent,
    AutorizadoComponent,
    SeguridadLoginComponent,
    LoginComponent,
    RegistroComponent,
    AutenticacionComponent 
     
  ],
  exports:[
     
  ],
  imports: [/*Para que se pueda usar en toda la aplicacion*/
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    SweetAlert2Module.forRoot()
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
