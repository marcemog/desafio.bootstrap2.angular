import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(  private servicio:ServicioService ) { }
  datos:any;
  ngOnInit(): void {
    this.servicio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.datos = data;
    });
  }

}
