import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';
@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {

  form:FormGroup;

  @Input()
  modelo:generoCreacionDTO

  @Output()
  submit:EventEmitter<generoCreacionDTO>=new EventEmitter<generoCreacionDTO>();

  constructor(private router:Router,private formBuilder:FormBuilder){

  }

  ngOnInit(){
    this.form=this.formBuilder.group({
      nombre:['',{validators:[Validators.required,Validators.minLength(3)]
      }]
    })
    //si el modelo es distinto de nulo asigne los datos al formulario
    if(this.modelo!==undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios():void{
    this.submit.emit(this.form.value);
     
  }

  obtenerErrorComponente(){
    var campo=this.form.get('nombre');
    if(campo.hasError('required')){
      return 'El campo nombre es requerido';
    }
    if(campo.hasError('minLength')){
      return 'El campo nombre es requerido';
    }
   
    return '';
  }

}
