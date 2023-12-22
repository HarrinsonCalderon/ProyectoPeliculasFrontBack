import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {

  form:FormGroup;

  errores:string[]=[];
  

  constructor(private router:Router , private generosService:GenerosService){

  }

  ngOnInit(){
    
  }

  guardarCambios(genero:generoCreacionDTO):void{
    //... guardar cambios
    console.log(genero);
    
    /*
    this.generosService.crear(genero).subscribe(()=>{
      this.router.navigate(['/generos']);
    },error=>console.log(error) );
    */
    this.generosService.crear(genero).subscribe({
      next: (v) => console.log(1,v),
      error: (e) => console.error(2,e),
      complete: () => console.info('complete') 
  })
  }

 
}


/*

*/
