import { CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {
  //manejar un elemento del formulario de manera individual
  myControl :FormControl=new FormControl()
  actores = [
    {nombre:'Tom Holland',personaje:'',foto:'https://phantom-marca.unidadeditorial.es/7e1df57a9502b3ce47e85d42a04ce93e/resize/1200/f/jpg/assets/multimedia/imagenes/2022/02/21/16454391499069.jpg'},
    {nombre:'Tom Hardy',personaje:'',foto:'https://imagenes.milenio.com/h3lVtrvxqzVFGfrXelx6r3C1FTs=/936x566/https://www.milenio.com/uploads/media/2021/08/14/tom-hardy-dejar-actuacion-hijos.jpg'},
    {nombre:'Andrew Garfield',personaje:'',foto:'https://upload.wikimedia.org/wikipedia/commons/b/bf/Andrew_Garfield_by_Gage_Skidmore_%28cropped%29.jpg'}
];
  constructor() { }
  actoresOriginal=this.actores
  actoresSeleccionados=[]

  columnasAMostrar=['imagen','nombre','personaje','acciones']
  @ViewChild(MatTable) table:MatTable<any>
  ngOnInit(): void {
    this.myControl.valueChanges.subscribe(valor=>{
      this.actores=this.actoresOriginal;
      this.actores=this.actores.filter(actor=>actor.nombre.indexOf(valor)!==-1)
    })
  }
  optionSelected(event){
    //console.log(event.option.value)
    this.actoresSeleccionados.push(event.option.value)
    this.myControl.patchValue('')
    if(this.table!==undefined){
      this.table.renderRows();
    }
  }
  eliminar(actor){
    const indice=this.actoresSeleccionados.findIndex(a=>a.nombre==actor.nombre)
    this.actoresSeleccionados.splice(indice,1)
    this.table.renderRows();
  }
  //ordenar la lista segun el arrastre
  finalizaArrastre(event:CdkDragDrop<any[]>){
    const indicePrevio=this.actoresSeleccionados.findIndex(
      actor=>actor===event.item.data
    )
    //para intercambiar el previo y los demas valores
    moveItemInArray(this.actoresSeleccionados,indicePrevio,event.currentIndex)
    this.table.renderRows();

  }
}