import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from "rxjs";
import { forwardRef } from '@angular/core';
import * as datos from '../../assets/data/datosportfolio.json';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

   
  createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> 
  {
      return datos; 
  }
}
