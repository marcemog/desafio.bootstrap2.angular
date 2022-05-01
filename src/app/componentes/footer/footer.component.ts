import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  datos:any;
  constructor( private servicio:ServicioService ) { }

  ngOnInit(): void {
    this.servicio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.datos = data;
    });
  }

}
