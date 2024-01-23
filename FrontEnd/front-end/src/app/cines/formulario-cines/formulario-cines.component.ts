import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cineCreacionDTO } from '../cine';

@Component({
  selector: 'app-formulario-cines',
  templateUrl: './formulario-cines.component.html',
  styleUrls: ['./formulario-cines.component.css']
})
export class FormularioCinesComponent implements OnInit{

form:FormGroup;
@Input()
modelo:cineCreacionDTO;

@Output()
guardarCambios:EventEmitter<cineCreacionDTO>=new EventEmitter<cineCreacionDTO>();


constructor(private formBuilder:FormBuilder){

}

ngOnInit(): void {

  console.log(this.modelo,'Formulario')
  this.form=this.formBuilder.group(
    {
      nombre:['',Validators.required]
    }
  )

    if(this.modelo!==undefined){
      //this.form.patchValue(this.modelo);
      let aux={
        nombre:this.modelo.nombre
      }
      console.log('1',this.modelo.nombre,'2',aux);
      this.form.patchValue(aux);

    }

}
OnSubmit(){
  this.guardarCambios.emit(this.form.value);
}

}
