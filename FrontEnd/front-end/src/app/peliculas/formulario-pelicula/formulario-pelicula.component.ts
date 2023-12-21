import { Component, OnInit, Output,Input,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaCreacionDTO } from '../pelicula';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/multipleSelectorModel';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit{

@Output()
OnSubmit:EventEmitter<PeliculaCreacionDTO>=new EventEmitter<PeliculaCreacionDTO>();
@Input()
modelo:PeliculaCreacionDTO
form:FormGroup

generosNoSeleccionados:MultipleSelectorModel[]=[
  {llave:1,valor:'Drama'},
  {llave:2,valor:'Accion'},
  {llave:3,valor:'Comedia'}
]
generosSeleccionados:MultipleSelectorModel[]=[];

cinesNoSeleccionados : MultipleSelectorModel[]=
[ 
  {llave:1,valor:'Sambil'},
  {llave:2,valor:'Agora'},
  {llave:3,valor:'Acropolis'}
]
cinesSeleccionados : MultipleSelectorModel[]=
[ 
 
]

constructor(private formBuilder:FormBuilder){

}

ngOnInit(): void {
  this.form=this.formBuilder.group({
    titulo:['',{validator:Validators.required}],
    resumen:'',
    enCines:false,
    trailer:'',
    fechaLanzamiento:'',
    poster:'',
    generosId:'',
    cinesId:''
  });
  if(this.modelo!==undefined){
    this.form.patchValue(this.modelo);

  }
}


guardarCambios(){

  console.log(this.generosSeleccionados);
  console.log(this.generosNoSeleccionados);
  const generosId=this.generosSeleccionados.map(val=>val.llave);
  this.form.get('generosId').setValue(generosId);

  const cinesId=this.cinesSeleccionados.map(val=>val.llave);
  this.form.get('cinesId').setValue(cinesId);

  this.OnSubmit.emit(this.form.value);
}

archivoSeleccionado(archivo:File){
  this.form.get('poster').setValue(archivo);
}
changeMarkdown(text){
  this.form.get('resumen').setValue(text);
}
}
