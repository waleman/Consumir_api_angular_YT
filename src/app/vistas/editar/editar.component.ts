import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PacienteI } from '../../modelos/paciente.interface';
import { ApiService } from '../../servicios/api/api.service';
import { FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute , private router:Router, private api:ApiService) { }

  datosPaciente:PacienteI;
  editarForm = new FormGroup({
     nombre: new FormControl(''),
     correo : new FormControl(''),
     dni: new FormControl(''),
     direccion: new FormControl(''),
     codigoPostal: new FormControl(''),
     genero: new FormControl(''),
     telefono: new FormControl(''),
     token: new FormControl(''),
     pacienteId: new FormControl(''),
     fechaNacimiento: new FormControl('')
});


  ngOnInit(): void {
     let pacienteid = this.activerouter.snapshot.paramMap.get('id');
     let token = this.getToken();
     this.api.getSinglePactient(pacienteid).subscribe(data  =>{
          this.datosPaciente = data[0];
          this.editarForm.setValue({
             'nombre': this.datosPaciente.Nombre,
             'correo': this.datosPaciente.Correo,
             'dni': this.datosPaciente.DNI,
             'direccion': this.datosPaciente.Direccion,
             'codigoPostal': this.datosPaciente.CodigoPostal,
             'genero': this.datosPaciente.Genero,
             'telefono': this.datosPaciente.Telefono,
             'token': token,
             'pacienteId': pacienteid,
            'fechaNacimiento': this.datosPaciente.FechaNacimiento
          });

          console.log(this.editarForm.value);
     })
  }


  getToken(){
    return localStorage.getItem('token');
  }

}
