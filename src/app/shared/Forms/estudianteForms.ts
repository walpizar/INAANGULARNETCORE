import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";



@Injectable({ providedIn: 'root' })
export default class estudianteForms{

 
    constructor(private fb: FormBuilder){

    }

    
  baseForm = this.fb.group({ 
    Id:[],
    Carnet: ['', [Validators.required]],
    IdPersona:[],
    IdHorario: ['', [Validators.required]], 
    IdGrupo: ['', [Validators.required]] , 
    IdPersonaNavigation:this.fb.group({
      Id:[], 
      Identificacion: ['', [Validators.required]], 
      TipoId: ['', [Validators.required]],
      Nombre: ['', [Validators.required]],
      Apellido1: ['', [Validators.required]],
      Apellido2: ['', [Validators.required]]

    })
  });

}