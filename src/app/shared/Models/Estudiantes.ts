import Grupo from "./Grupo";
import Horario from "./Horario";
import Persona from "./Persona";

interface Estudiante{
    Id: number,
    Carnet: string,
    IdGrupo: number,
    IdPersona: number,
    IdHorario: number,
    IdPersonaNavigation: Persona,
    IdGrupoNavigation: Grupo,
    IdHorarioNavigation: Horario
}
export default Estudiante;