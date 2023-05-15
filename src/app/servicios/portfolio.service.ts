import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPortfolio } from '../componentes/sobre-mi/sobre-mi.component'

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  constructor(private http:HttpClient) { }
  
  
  obtenerDatos():Observable<any>{
    return this.http.get('../assets/data/datosportfolio.json');
  }
  obtenerPortfolio():Observable<IPortfolio> {
    return this.http.get('api/portfolio');
  }
}