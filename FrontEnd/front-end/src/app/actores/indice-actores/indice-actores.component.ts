import { Component, OnInit } from '@angular/core';
import { generoDTO } from 'src/app/generos/genero';
import { actorDTO } from '../actor';
import { ActoresService } from '../actores.service';

@Component({
  selector: 'app-indice-actores',
  templateUrl: './indice-actores.component.html',
  styleUrls: ['./indice-actores.component.css']
})
export class IndiceActoresComponent implements OnInit{

  //generos:generoDTO[];
  columnasAMostrar=['id','nombre','acciones']

  actores : actorDTO  [] ;
  


  constructor(private actorService:ActoresService){
  }

  ngOnInit(): void {
    this.cargarActores();
  }

  cargarActores(){
    this.actorService.obtenerTodos().subscribe(actores=>{
      console.log(actores);
      this.actores=actores;
      //this.actores = actores;
      
     });
  }

 

  borrar(id:number){
    this.actorService.borrar(id).subscribe({ 
      next: (v) =>{ this.cargarActores();
      } 
    
    });
  }

}
