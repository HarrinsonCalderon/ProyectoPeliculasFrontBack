import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generoCreacionDTO, generoDTO } from '../genero';
import { GenerosService } from '../generos.service';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit{

  modelo:generoDTO;
  errores:string[]=[];

  constructor(private router:Router,private generosService:GenerosService,private activetedRoute:ActivatedRoute){
  }
  
  ngOnInit(): void {
      
    this.activetedRoute.params.subscribe(parametro=>{
      //alert(parametro.id)
      this.generosService.obtenerPorId(parametro.id).subscribe({ 
        next: (v) =>{  this.modelo=v;},
        error: (e) =>{  this.router.navigate(['/generos'])}
        //complete: () => console.info('complete') 
      
      });

     

     })

  



  }
  guardarCambios(genero:generoCreacionDTO){
    //... guardar cambios
    //console.log(genero);
    //this.router.navigate(['/generos']);

    this.generosService.editar(this.modelo.id,genero).subscribe({ 
      next: (v) =>{   this.router.navigate(['/generos'])},
      error: (e) =>{ this.errores=parsearErroresApi(e)}
      //complete: () => console.info('complete') 
    
    });

  }


  
}
