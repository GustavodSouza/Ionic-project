import { Component, OnInit } from '@angular/core';
import { PiqueteModel } from '../model/piqueteModel';
import { Router } from '@angular/router';
import { PiqueteDaoService } from '../piqueteDAO/piqueteDAO.service';

@Component({
  selector: 'app-calcular-piquete',
  templateUrl: './calcular-piquete.page.html',
  styleUrls: ['./calcular-piquete.page.scss'],
})
export class CalcularPiquetePage implements OnInit {

  public piquete: PiqueteModel = new PiqueteModel();

  constructor(private piqueteDAO: PiqueteDaoService) { }

  ngOnInit() {
  }

  calcular(): number {
    let resultado;

    //Realiza o calculo de acordo com a fórmula;
    resultado = (this.piquete.periodoDescanso / this.piquete.periodoOcupacao)+1;
    
    //------------OBTER A DATA DO SISTEMA------------//
    let data = new Date(); //Instancia um objeto data.
    let dia = data.getDate(); //dia
    let mes = data.getUTCMonth()+1; //mes
    let ano = data.getFullYear(); //ano
  
    this.piquete.dataCompleta = dia.toString().concat('/').concat(mes.toString()).concat('/').concat(ano.toString());
    this.piquete.resultadoPiquete = resultado.toFixed(2); //Adiciono ao objeto o resultado do calculo.
    this.piqueteDAO.salvarPiquete(this.piquete);
    return (document.getElementById('resultado').innerHTML = resultado.toFixed(2));
  }

}
