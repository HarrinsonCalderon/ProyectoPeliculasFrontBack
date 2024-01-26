import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cineCreacionDTO } from '../cine';

@Component({
  selector: 'app-formulario-cines',
  templateUrl: './formulario-cines.component.html',
  styleUrls: ['./formulario-cines.component.css']
})
export class FormularioCinesComponent implements OnInit { 

form:FormGroup;
@Input()
modelo:cineCreacionDTO;

@Output()
guardarCambios:EventEmitter<cineCreacionDTO>=new EventEmitter<cineCreacionDTO>();


constructor(private formBuilder:FormBuilder){
  this.form=this.formBuilder.group(
    {
      nombre:['',Validators.required]
    }
  )

}

ngOnInit(): void {

   console.log(this.modelo,'Formulario')
 
    if(this.modelo!==undefined){
      //this.form.patchValue(this.modelo);
      //this.form.patchValue(aux);
      //this.form = this.formBuilder.group({
      //  nombres: [this.modelo.nombre, [Validators.required]]
      //});
       
    }

}

 


OnSubmit(){
  this.guardarCambios.emit(this.form.value);
}

}
