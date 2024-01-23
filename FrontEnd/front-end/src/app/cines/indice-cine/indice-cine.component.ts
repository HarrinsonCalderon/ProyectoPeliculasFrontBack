import { Component, ViewChild } from '@angular/core';
import { cineDTO } from '../cine';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CinesService } from '../cines.service';

@Component({
  selector: 'app-indice-cine',
  templateUrl: './indice-cine.component.html',
  styleUrls: ['./indice-cine.component.css']
})
export class IndiceCineComponent {
//generos:generoDTO[];
columnasAMostrar=['id','nombre','acciones']

cines = new MatTableDataSource<cineDTO>([]);

@ViewChild(MatPaginator) paginator!: MatPaginator;


constructor(private cinesService:CinesService){
}

ngOnInit(): void {
  this.cargarGeneros();
}

cargarGeneros(){
  this.cinesService.obtenerTodos().subscribe(generos=>{
    console.log(generos);
    //this.generos=generos;
    this.cines = new MatTableDataSource<cineDTO>(generos);
    //this.dataSource = new MatTableDataSource<generoDTO>(generos);
   });
}

ngAfterViewInit() {
  this.cines.paginator = this.paginator;
}

borrar(id:number){
  this.cinesService.borrar(id).subscribe({ 
    next: (v) =>{ this.cargarGeneros();
    } 
  
  });
}
}
