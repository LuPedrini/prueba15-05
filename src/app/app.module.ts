import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './servicios/in-memory-data.service';
import { forwardRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './componentes/banner/banner.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BarrasskillsComponent } from './componentes/barrasskills/barrasskills.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SobreMiComponent,
    ExperienciaComponent,
    FormacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    BannerComponent,
    HeaderComponent,
    BarrasskillsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: true}
    )
    
  ],
  providers: [[{provide: InMemoryDataService, useFactory: forwardRef(() => HttpClient)}]
],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
