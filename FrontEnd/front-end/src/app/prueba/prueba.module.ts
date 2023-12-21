import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentePruebaComponent } from './componente-prueba/componente-prueba.component';

import{MatToolbarModule} from '@angular/material/toolbar'
import{MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    ComponentePruebaComponent
  ],

  exports:[
     
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule 
 
 
  ],
  imports: [
    CommonModule
  ]
})
export class PruebaModule { }
