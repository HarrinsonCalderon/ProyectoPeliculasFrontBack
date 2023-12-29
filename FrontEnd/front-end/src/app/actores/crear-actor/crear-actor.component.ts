import { Component, OnInit } from '@angular/core';
import { actorCreacionDTO } from '../actor';
import { ActoresService } from '../actores.service';
import { Router } from '@angular/router';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent implements OnInit{

  errores=[];

  constructor(private actoresService:ActoresService,private router:Router){

  }

  ngOnInit(): void {
    
  }
  
  guardarCambios(actor:actorCreacionDTO){
    this.actoresService.crear(actor).subscribe({ 
      next: (v) =>{   this.router.navigate(['/actores'])},
      error: (e) =>{ this.errores=parsearErroresApi(e)}
      //complete: () => console.info('complete') 
    
    });
  }
}
