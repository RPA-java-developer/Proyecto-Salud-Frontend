import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

    constructor(private httpClient : HttpClient) { }

  // Esta URL genera el listado de todos los customer en el backeng
  private baseURL = "http://localhost:8080/api/v1/empleados";

  // Este metodo obtiene la lista de empleados
  obtenerListaDeClientes():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }

  // Este método sirve para registrar un empleado
  registrarEmpleado(empleado:Empleado) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, empleado)
  }

  //este metodo sirve para actualizar el empleado
  actualizarEmpleado(id:number,empleado:Empleado) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,empleado);
  }

  eliminarEmpleado(id:number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
