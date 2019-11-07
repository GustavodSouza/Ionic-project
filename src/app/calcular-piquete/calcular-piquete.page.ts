import { Component, OnInit } from '@angular/core';
import { PiqueteModel } from '../model/piqueteModel';
import { PiqueteDaoService } from '../piqueteDAO/piqueteDAO.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calcular-piquete',
  templateUrl: './calcular-piquete.page.html',
  styleUrls: ['./calcular-piquete.page.scss'],
})
export class CalcularPiquetePage implements OnInit {

  public piquete: PiqueteModel = new PiqueteModel();

  periodoOcupacao: string;

  constructor(private piqueteDAO: PiqueteDaoService,
              private alertController: AlertController) {}

  ngOnInit() {
  }

  select: any;

  async inputVazio() {
    const alert = await this.alertController.create({
      header: 'Ops!',
      subHeader: 'Campo vazio!',
      message: 'Por favor, preencha todos os campos.',
      buttons: ['OK']
    });

    await alert.present();
  }

  calcular(): void {
    let resultado;

    //Verificação de input vazio
    if(this.select == null || this.piquete.periodoOcupacao == null) {
      this.inputVazio();
      return;
    }

    //Formula do piquete;
    resultado = (this.select / this.piquete.periodoOcupacao)+1;
    
    let data = new Date(); //Coleta da data
    let dia = data.getDate(); 
    let mes = data.getUTCMonth()+1;
    let ano = data.getFullYear(); 
  
    this.piquete.dataCompleta = dia.toString().concat('/').concat(mes.toString()).concat('/').concat(ano.toString());
    this.piquete.resultadoPiquete = resultado.toFixed(0); //Atribuição do resultado.
    this.piquete.periodoDescanso = this.select; //Atribuição do capim selecionado
    this.piqueteDAO.salvarPiquete(this.piquete); //Inserção no local storage
    document.getElementById('resultado').innerHTML = resultado.toFixed(0) + ' piquetes'; //Resultado no input
  }

  limparInputs(): void {
    this.periodoOcupacao = null;
    document.getElementById('resultado').innerHTML = "0";
  }
}
