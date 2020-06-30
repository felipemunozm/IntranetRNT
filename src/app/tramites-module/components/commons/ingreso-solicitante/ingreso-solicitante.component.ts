import { Component, OnInit, DoCheck } from '@angular/core';
import { Solicitante } from '../../../models/solicitante.model'

@Component({
  selector: 'ingreso-solicitante',
  templateUrl: './ingreso-solicitante.component.html',
  styleUrls: ['./ingreso-solicitante.component.css']
})
export class IngresoSolicitanteComponent implements OnInit, DoCheck {

  public isEmpresa
  public isPersona
  public isMandatario
  public solicitante: Solicitante
  constructor() {
    this.solicitante = new Solicitante('', '', '', 0, '', '')
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log("isPersona: " + this.isPersona)
    console.log("isMandatario: " + this.isMandatario)
  }
  isMandatarioChange(checked) {
    console.log("Llego: " + checked)
    this.isMandatario = checked
  }
  checkOnChange() {
    console.log("isMandatario: " + this.isMandatario)
  }
}
