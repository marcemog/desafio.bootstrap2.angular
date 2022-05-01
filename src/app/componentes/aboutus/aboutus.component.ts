import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  datos:any;
  constructor( private servicio:ServicioService ) { }

  ngOnInit(): void {
    this.servicio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.datos = data;
    });
  }

}
