import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  datos:any;
  constructor( private servicio:ServicioService ) { }

  ngOnInit(): void {
    this.servicio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.datos = data;
    });
  }

}
