import { Injectable } from '@angular/core';
import { LoginI } from  '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { ListapacientesI } from '../../modelos/listapacientes.interface';
import { PacienteI } from '../../modelos//paciente.interface';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://solodata.es/";

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "auth";
    return this.http.post<ResponseI>(direccion,form);
  }

  getAllPatients(page:number):Observable<ListapacientesI[]>{
    let direccion = this.url + "pacientes?page=" + page;
    return this.http.get<ListapacientesI[]>(direccion);
  }

  getSinglePactient(id):Observable<PacienteI>{
    let direccion = this.url + "pacientes?id=" + id;
    return this.http.get<PacienteI>(direccion);
  }

  putPatient(form:PacienteI):Observable<ResponseI>{
    let direccion = this.url + "pacientes";
    return this.http.put<ResponseI>(direccion, form);
  }

  deletePatient(from:PacienteI):Observable<ResponseI>{
    let direccion = this.url + "pacientes";
    let Options = {
      headers: new HttpHeaders({
         'Conten-type': 'application/json'
      }),
      body:from
    }
    return this.http.delete<ResponseI>(direccion, Options);
  }

  postPatient(form:PacienteI):Observable<ResponseI>{
    let direccion = this.url+ "pacientes";
    return this.http.post<ResponseI>(direccion,form);
  }


}
