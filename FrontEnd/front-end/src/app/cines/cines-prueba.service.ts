import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CinesPruebaService {

 
  private apiURL=environment.apiURL+'cines';

  constructor(private http:HttpClient) { }

  

   
   
  obtenerPorId(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<any>(url);
  }
}
