import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent implements OnInit {

  empleados:Empleado[];

  constructor(private empleadoServicio:EmpleadoService, private router:Router) { }

  ngOnInit(): void {

    /*
    this.empleados = [
      {
        "id": 1,
        "nombre": "Rodrigo",
        "apellido": "Piragauta",
        "email": "rodrigo@correo.com",
      },
      {
        "id": 2,
        "nombre": "Amanda",
        "apellido": "Benavidez",
        "email": "amanda@correo.com",
      }
    ];
    */

    this.obtenerEmpleados();
  }

  actualizarEmpleado(id:number) {
    this.router.navigate(['actualizar-empleado', id]);
  }


  eliminarEmpleado(id:number){
    (swal as any).fire({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al empleado",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result: { value: any; }) => {
      if(result.value){
        this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpleados();
          (swal as any).fire({
            title: 'Empleado eliminado',
            text: 'El empleado ha sido eliminado con exito',
            icon: 'success'
          });
        })
      }
    })
  }

  verDetallesDelEmpleado(id:number) {
    this.router.navigate(['empleado-detalles', id]);
  }

  private obtenerEmpleados() {
    this.empleadoServicio.obtenerListaDeClientes().subscribe(dato => {
      this.empleados = dato;
    })
  };

}
