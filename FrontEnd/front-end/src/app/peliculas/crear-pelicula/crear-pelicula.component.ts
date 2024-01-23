import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDTO } from '../pelicula';
import { PeliculasService } from '../peliculas.service';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/multipleSelectorModel';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  constructor(private peliculasService:PeliculasService){

  }

  generosNoSeleccionados:MultipleSelectorModel[];
  cinesNoseleccionados:MultipleSelectorModel[];

  ngOnInit(): void {
     this.peliculasService.PostGet().subscribe({
      next: (v) =>{ 
        
          console.log(v);
          /*  
          this.generosNoSeleccionados=v.generos.map(genero=>{
            return <MultipleSelectorModel>{llave:genero.id,valor:genero.nombre}
          });
          this.cinesNoseleccionados=v.cines.map(cines=>{
            return <MultipleSelectorModel>{llave:cines.id,valor:cines.nombre}
          });
          */
      },
      error: (e) =>  console.info('error1') ,
      complete: () => console.info('complete') 
  })
  }

  guardarCambios(pelicula:PeliculaCreacionDTO){
    console.log(pelicula)
  }
}
