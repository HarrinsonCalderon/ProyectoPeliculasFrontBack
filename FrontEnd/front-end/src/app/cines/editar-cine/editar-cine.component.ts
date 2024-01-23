import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cineCreacionDTO, cineDTO } from '../cine';
import { CinesService } from '../cines.service';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  modelo:cineDTO;
  //modelo:any;
  respuesta:cineDTO;
  errores:string[]=[];
  //modelo:cineDTO={id:1,nombre:'Felipe'};
  aux:any;
  constructor(private router:Router,private cinesService:CinesService,private activetedRoute:ActivatedRoute){
    
    this.activetedRoute.params.subscribe(parametro=>{
      // alert(parametro.id)  
       })

  }
  
  ngOnInit(): void {

    this.cinesService.obtenerPorId(5).subscribe({ 
      next: (v) =>{ 
        //this.modelo.id=v.id; 
      //this.modelo.nombre=v.nombre;
      this.modelo = {id: v.id, nombre:v.nombre};
        console.log(this.modelo.nombre)  
        this.aux=v.nombre;
      },
      error: (e) =>{ console.info('error',e);
        
      },
      //complete:  (c) =>{ console.info('error',c)
    });
    //this.mostrarDatos();
    console.log(this.aux);
     
    this.modelo={id:1,nombre:this.aux};
  }



  mostrarDatos( ){
    this.modelo={id:1,nombre:'dato quemado'};
  }



  guardarCambios(cine:cineCreacionDTO){
    //... guardar cambios
    //console.log(genero);
    //this.router.navigate(['/generos']);
    this.cinesService.editar(this.modelo.id,cine).subscribe({ 
      next: (v) =>{   this.router.navigate(['/cines'])},
      error: (e) =>{ this.errores=parsearErroresApi(e)}
      //complete: () => console.info('complete') 
    });
  }

}
