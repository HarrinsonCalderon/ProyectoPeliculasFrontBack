import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit{

  modelo:PeliculaDTO={
    titulo:'spider man',
    resumen:'abc',
    enCines:true,
    fechaLanzamiento:new Date(),
    trailer:'https://w7.pngwing.com/pngs/702/302/png-transparent-red-and-blue-spider-man-illustration-spider-man-spider-man-comics-heroes-comic-book.png'
  }

  constructor(private activetedRoute:ActivatedRoute){

  }
  
  ngOnInit(): void {
     this.activetedRoute.params.subscribe(parametro=>{
      //alert(parametro.id)
     })
  }
  guardarCambios(pelicula:PeliculaCreacionDTO){
    console.log(pelicula);
  }
}
