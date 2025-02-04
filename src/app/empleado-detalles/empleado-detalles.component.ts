import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrl: './empleado-detalles.component.css'
})
export class EmpleadoDetallesComponent implements OnInit {

  id:number;
  empleado:Empleado;

  constructor(private route:ActivatedRoute, private empleadoServicio:EmpleadoService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoServicio.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.empleado = dato;
      (swal as any).fire(`Detalles del empleado ${this.empleado.nombre}`);
    });
  }

}
