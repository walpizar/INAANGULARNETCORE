import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import estudianteForms from 'src/app/shared/Forms/estudianteForms';
import Estudiante from 'src/app/shared/Models/Estudiantes';
import { EstudiantesService } from 'src/app/shared/services/estudiantes.service';

import { EstudianteModalComponent } from './estudiante-modal/estudiante-modal.component';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  displayedColumns: string[] = ['id','carnet', 'nombre', 'apellido1', 'apellido2','acciones'];
  dataSource = new MatTableDataSource();

 
  constructor(private estudianteServ: EstudiantesService, public dialog: MatDialog){

  }


  ngOnInit(): void {
   this.cargarDatos();
  }

  openModal(estudiante = undefined){
   
    var modal= this.dialog.open(EstudianteModalComponent,{
      width:'900px',
      height:'650px',
      data:{titulo:'Mantenimiento Estudiante', dato:estudiante }
    }
    );
    modal.afterClosed().subscribe(res=>{
      this.cargarDatos();
     
    });

  }
  cargarDatos(){
    this.estudianteServ.getAll().subscribe((result)=>{
        this.dataSource.data= result;
      }  
  
    );

  }

  eliminar(estudiante: Estudiante){

    this.estudianteServ.eliminar(estudiante).subscribe((result)=>{
      this.cargarDatos();
      console.log("Esstudiante eliminados");
    }, (err)=>{
      console.log("No se pudo eliminar eliminados");

    });
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
