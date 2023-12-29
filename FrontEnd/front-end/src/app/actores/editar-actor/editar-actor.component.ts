import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';
import { ActoresService } from '../actores.service';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit{

  //modelo:actorDTO={id:1,nombre:'Felipe',fechaNacimiento:new Date(),biografia:'dsds', foto:'https://c8.alamy.com/comp/2JJFK4M/archive-photo-arnold-schwarzenegger-celebrates-his-75th-birthday-on-july-30-2022-sn14109724vmjpg-arnold-schwarzenegger-usa-actor-portrait-landscape-format-sven-simon-huyssenallee-40-42-45128-essen-tel0201234556-fax-0201234539-account-2039154-deutsche-bank-munich-blz-700-700-10-image-can-be-transmitted-digitally-via-leonardo-pro-2JJFK4M.jpg'};
  modelo:actorDTO;
  errores:string[]=[];

  constructor(private router:Router,private actorService:ActoresService,private activetedRoute:ActivatedRoute){
  }
  
  ngOnInit(): void { 
    this.activetedRoute.params.subscribe(parametro=>{
    // alert(parametro.id)
      this.actorService.obtenerPorId(parametro.id).subscribe({ 
        next: (v) =>{  this.modelo=v;console.log(1,v,this.modelo) },
        error: (e) =>{ console.info('error',e);
          
        }
        //complete: () => console.info('complete') 
      });
     })

  }
  guardarCambios(actor:actorCreacionDTO){
    //... guardar cambios
    //console.log(genero);
    //this.router.navigate(['/generos']);

    this.actorService.editar(this.modelo.id,actor).subscribe({ 
      next: (v) =>{   this.router.navigate(['/actores'])},
      error: (e) =>{ this.errores=parsearErroresApi(e)}
      //complete: () => console.info('complete') 
    
    });

  }
}
