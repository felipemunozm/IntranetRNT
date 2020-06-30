import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export class Solicitante {
    constructor(
        public name: string,
        public run: string,
        public email: string,
        public region: number,
        public rutEmpresa: String,
        public runMandatario: string,
    ) {


    }
}