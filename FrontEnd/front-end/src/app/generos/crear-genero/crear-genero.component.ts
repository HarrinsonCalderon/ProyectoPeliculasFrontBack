import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {

  form:FormGroup;
  constructor(private router:Router ){

  }

  ngOnInit(){
    
  }

  guardarCambios(genero:generoCreacionDTO):void{
    //... guardar cambios
    console.log(genero);
    this.router.navigate(['/generos']);
  }

 
}
