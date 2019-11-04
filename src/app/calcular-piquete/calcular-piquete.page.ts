import { Component, OnInit } from '@angular/core';
import { PiqueteModel } from '../model/piqueteModel';
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

  calcular(): void {
    let resultado;

    

    //Formula do piquete;
    //resultado = (this.piquete.periodoDescanso / this.piquete.periodoOcupacao)+1;
    
    let data = new Date(); 
    let dia = data.getDate(); 
    let mes = data.getUTCMonth()+1;
    let ano = data.getFullYear(); 
  
    /*this.piquete.dataCompleta = dia.toString().concat('/').concat(mes.toString()).concat('/').concat(ano.toString());
    this.piquete.resultadoPiquete = resultado.toFixed(0); //Adiciono ao objeto o resultado do calculo.
    this.piqueteDAO.salvarPiquete(this.piquete);
    document.getElementById('resultado').innerHTML = resultado.toFixed(0);*/
  }

}
