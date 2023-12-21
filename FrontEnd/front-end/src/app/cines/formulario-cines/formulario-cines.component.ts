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
  this.form=this.formBuilder.group(
    {
      nombre:['',Validators.required]
    }
  )

    if(this.modelo!==undefined){
      this.form.patchValue(this.modelo);
    }

}
OnSubmit(){
  this.guardarCambios.emit(this.form.value);
}

}
