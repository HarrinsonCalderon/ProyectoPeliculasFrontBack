import { Component,Output,Input,EventEmitter  } from '@angular/core';
import { MultipleSelectorModel } from './multipleSelectorModel';

@Component({
  selector: 'app-selector-multiple',
  templateUrl: './selector-multiple.component.html',
  styleUrls: ['./selector-multiple.component.css']
})
export class SelectorMultipleComponent {


  @Input()
  Seleccionados:MultipleSelectorModel[]=[];
  @Input()
  NoSeleccionados:MultipleSelectorModel[]=[];
  

  constructor(){

  }

  seleccionarTodo(){
    this.Seleccionados.push(...this.NoSeleccionados);
    this.NoSeleccionados=[];
  }
  deseleccionarTodo(){
    this.NoSeleccionados.push(...this.Seleccionados);
    this.Seleccionados=[];
  } 
  seleccionar(item:MultipleSelectorModel,index:number){
    this.Seleccionados.push(item);
    this.NoSeleccionados.splice(index,1);
  }
  deseleccionar(item:MultipleSelectorModel,index:number){
    this.NoSeleccionados.push(item);
    this.Seleccionados.splice(index,1);
  }

}
