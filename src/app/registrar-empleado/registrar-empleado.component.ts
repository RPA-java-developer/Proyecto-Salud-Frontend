import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';


@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrl: './registrar-empleado.component.css'
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado:Empleado = new Empleado();

  constructor(private empleadoServicio:EmpleadoService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarEmpleado() {
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(
      {
        next: (dato) => {
          console.log(dato),
          this.irAlaListaDeEmpleados()
        },
          error: (e) => console.error(e),
          complete: () => console.info('complete')

      });
  }

  irAlaListaDeEmpleados() {
    this.router.navigate(['/empleados']);
  }


  onSubmit() {
    this.guardarEmpleado();
  }
}
