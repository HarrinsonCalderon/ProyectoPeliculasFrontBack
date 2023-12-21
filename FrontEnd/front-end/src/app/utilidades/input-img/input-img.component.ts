import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
import { conversionABase64 } from '../utilidades';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit{

  imagenBase64:string

  @Input()
  urlImagenActual:string;

  @Output()
  archivoSeleccionado:EventEmitter<File>=new EventEmitter<File>();

  constructor(){}

  ngOnInit(): void {
    
  }

  change(event){
    if(event.target.files.length>0){
        const file:File=event.target.files[0];
        conversionABase64(file).then((value:string)=>this.imagenBase64=value).catch(error=>console.log(error));
        this.archivoSeleccionado.emit(file);
        this.urlImagenActual=null;  
    }
  }


}
