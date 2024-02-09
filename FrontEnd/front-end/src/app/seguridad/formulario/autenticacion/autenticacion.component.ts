import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { credencialesUsuario } from '../../seguridad';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.css']
})
export class AutenticacionComponent implements OnInit{

  form:FormGroup;
  @Input()
  errores:string[]=[];
  @Output()
  onSubmit:EventEmitter<credencialesUsuario> =new EventEmitter<credencialesUsuario>();
  @Input() accion:string;

  constructor(private formBuilder:FormBuilder){

  }

  ngOnInit(): void {

    this.form=this.formBuilder.group({
      email:['',{
        validators:[Validators.required,Validators.email]
      }],
      password:['',{
        validators:[Validators.required]
    }]
  })

  }

  obtenerMensajeErrorEmail(){
    var campo=this.form.get('email');
    if(campo.hasError('required')){
      return 'El campo email es requerido';
    }
    if(campo.hasError('email')){
      return 'El campo email no es válido';
    }
    return '';
  }
 
}