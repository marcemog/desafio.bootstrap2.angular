import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  datos:any;
  constructor( private servicio:ServicioService ) { }

  ngOnInit(): void {
    this.servicio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.datos = data;
    });
  }

}
