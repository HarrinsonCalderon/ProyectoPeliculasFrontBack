import { Component, Input, OnInit } from '@angular/core';
import { cineCreacionDTO } from '../cine';
import { Router } from '@angular/router';
import { CinesService } from '../cines.service';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent implements OnInit{

 
@Input()
  errores:string[]=[];
  

  constructor(private router:Router , private cinesService:CinesService){

  }

  ngOnInit(){
    
  }

  guardarCambios(cine:cineCreacionDTO):void{
     
    console.log(cine);
    
    this.cinesService.crear(cine).subscribe({
      next: (v) =>{ console.log(1,v);this.router.navigate(['/cines'])},
      error: (e) =>  this.errores=parsearErroresApi(e),
      complete: () => console.info('complete') 
  })
  }

}
