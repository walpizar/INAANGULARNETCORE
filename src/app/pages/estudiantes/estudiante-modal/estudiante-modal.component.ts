import { IfStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import estudianteForms from 'src/app/shared/Forms/estudianteForms';
import Estudiante from 'src/app/shared/Models/Estudiantes';
import Grupo from 'src/app/shared/Models/Grupo';
import Horario from 'src/app/shared/Models/Horario';

import { EstudiantesService } from 'src/app/shared/services/estudiantes.service';
import { GruposService } from 'src/app/shared/services/grupos.service';
import { HorariosService } from 'src/app/shared/services/horarios.service';

@Component({
  selector: 'app-estudiante-modal',
  templateUrl: './estudiante-modal.component.html',
  styleUrls: ['./estudiante-modal.component.scss']
})
export class EstudianteModalComponent implements OnInit {

  titulo="";

  isModify= false;
  listaGrupos: Grupo[] | undefined;
  listaHorario: Horario[] | undefined;


  constructor(public estudianteForm: estudianteForms,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private estudianteServ : EstudiantesService,
    private grupoServ: GruposService,
    private horarioServ: HorariosService


    ) { }

  ngOnInit(): void {

    if(this.data.dato!= undefined){
  
      this.isModify=true;
      this.titulo="Modificar Estudiante";
        
      this.patchForm();



    }else {
     // this.estudianteForm.baseForm.reset('');
      this.isModify=false;
      this.titulo="Crear Estudiante";
      this.estudianteForm.baseForm.reset();
    }

    this.cargarCombos();
    //this.estudianteForm.baseForm.value({IdHorario:2})
   
  }

  cargarCombos() {

    this.grupoServ.getAll().subscribe(lista=>{

      this.listaGrupos= lista;
    }, err=>{

    });

    this.horarioServ.getAll().subscribe(lista=>{
  
      this.listaHorario= lista;     
    }, err=>{

    });




  }

  patchForm(){

   this.estudianteForm.baseForm.patchValue({

    Id:this.data?.dato?.Id,
    Carnet:this.data?.dato?.Carnet.trim(),   
    IdGrupo:this.data?.dato?.IdGrupo,
    IdHorario:this.data?.dato?.IdHorario,
    IdPersona:this.data?.dato?.IdPersona,
    IdPersonaNavigation:{
      Id:this.data?.dato?.IdPersonaNavigation?.Id,   
      TipoId:this.data?.dato?.IdPersonaNavigation?.TipoId.trim(),   
      Identificacion:this.data?.dato?.IdPersonaNavigation?.Identificacion, 
      IdPersona:this.data?.dato?.IdPersonaNavigation?.IdPersona,
      Nombre:this.data?.dato?.IdPersonaNavigation?.Nombre.trim(),
      Apellido1:this.data?.dato?.IdPersonaNavigation?.Apellido1.trim(),
      Apellido2:this.data?.dato?.IdPersonaNavigation?.Apellido2.trim(),
    }     
   });
 

  }

  onSave(){


    if(this.estudianteForm.baseForm.invalid){
      return;
    }

    var estudiante= this.estudianteForm.baseForm.value;

    if(this.isModify){
      this.estudianteServ.update(estudiante).subscribe(res=>{
        console.log("Se modificó correctamente");
  
      //  this.estudianteForm.baseForm.reset();

      },(err)=>{
        console.log(err);
  
      });

    }else{
      this.estudianteServ.save(estudiante).subscribe(res=>{
        console.log("Se guardo correctamente");
  
      },(err)=>{
        console.log(err);
  
      });

    }
  }

}
