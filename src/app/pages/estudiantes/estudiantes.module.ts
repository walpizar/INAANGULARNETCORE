import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { EstudiantesComponent } from './estudiantes.component';
import { MaterialModule } from 'src/app/material.module';
import { EstudianteModalComponent } from './estudiante-modal/estudiante-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    EstudiantesComponent,
    EstudianteModalComponent
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    MaterialModule, 
    ReactiveFormsModule
  ]
})
export class EstudiantesModule { }
