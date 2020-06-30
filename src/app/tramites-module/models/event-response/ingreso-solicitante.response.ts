export class IngresoSolicitanteResponse {
    constructor(
        public nombre: string,
        public run: string,
        public email: string,
        public tipoResponsabilidad: string,
        public rutEmpresa: string,
        public runMandatarioEmpresa: string,
        public runMandatarioPersona: string,
        public regin: number
    ) {

    }
}