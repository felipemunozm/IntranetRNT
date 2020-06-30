import { Component, OnInit } from '@angular/core';
import { Solicitante } from '../../../models/solicitante.model'

@Component({
  selector: 'ingreso-solicitante',
  templateUrl: './ingreso-solicitante.component.html',
  styleUrls: ['./ingreso-solicitante.component.css']
})
export class IngresoSolicitanteComponent implements OnInit {

  public solicitante: Solicitante
  constructor() {
  }

  ngOnInit(): void {
  }

}
