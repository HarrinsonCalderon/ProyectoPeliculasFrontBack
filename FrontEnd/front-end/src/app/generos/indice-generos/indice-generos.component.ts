import { Component, OnInit, ViewChild } from '@angular/core';
import { GenerosService } from '../generos.service';
import { generoDTO } from '../genero';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css']
})
export class IndiceGenerosComponent implements OnInit{

  //generos:generoDTO[];
  columnasAMostrar=['id','nombre','acciones']

  generos = new MatTableDataSource<generoDTO>([]);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private generosService:GenerosService){
  }

  ngOnInit(): void {
     this.generosService.obtenerTodos().subscribe(generos=>{
      console.log(generos);
      //this.generos=generos;
      this.generos = new MatTableDataSource<generoDTO>(generos);
      //this.dataSource = new MatTableDataSource<generoDTO>(generos);
     });
  }

  ngAfterViewInit() {
    this.generos.paginator = this.paginator;
  }
}
