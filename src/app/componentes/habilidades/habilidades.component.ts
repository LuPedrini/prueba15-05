import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  skillsList:any;
  constructor(private datosPortfolio:PortfolioService) {}

ngOnInit(): void {
  this.datosPortfolio.obtenerDatos().subscribe(data => {
    this.skillsList=data.skills;
  })
}
}


