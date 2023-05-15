import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

export interface IPortfolio {
  profile_img?: string;
  name?: string;
}

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit{
public miPortfolio: IPortfolio = {};
  constructor(private datosPortfolio:PortfolioService) {}

ngOnInit(): void {
  this.datosPortfolio.obtenerPortfolio().subscribe(data =>{
    this.miPortfolio=data;
  });
  
}

}
