import { Component, OnInit } from '@angular/core';
import { ConsumoAnimalModel } from '../model/consumoAnimalModel';
import { PiqueteDaoService } from '../piqueteDAO/piqueteDAO.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calcular-consumo-animal',
  templateUrl: './calcular-consumo-animal.page.html',
  styleUrls: ['./calcular-consumo-animal.page.scss'],
})
export class CalcularConsumoAnimalPage implements OnInit {

  public consumo: ConsumoAnimalModel = new ConsumoAnimalModel();

  ingestaoAnimal: string;
  pesoMedioAnimal: string;
  numeroAnimais: string;
  perdaPastejo: string;
  estacionalidade: string;

  constructor(private piqueteDao: PiqueteDaoService,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  async alertaEstacionalidade() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Número inválido!',
      message: 'Estacionalidade deve estar entre 0.1 e 0.2',
      buttons: ['OK']
    });

    await alert.present();
  }
  
  async alertaPerdaDePastejo() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Número inválido!',
      message: 'Perda de pastejo deve estar entre 0.0 e 0.3',
      buttons: ['OK']
    });

    await alert.present();
  }

  async inputVazio() {
    const alert = await this.alertController.create({
      header: 'Ops!',
      subHeader: 'Campo(s) vazio(s)!',
      message: 'Por favor, preencha todo(s) o(s) campo(s).',
      buttons: ['OK']
    });

    await alert.present();
  }

  calcular(): void {
    let consumoAnimal;
    let msPorHec;
    let msPorHecPorAno;

    let data = new Date(); //Coleta da data.
    let dia = data.getDate(); 
    let mes = data.getUTCMonth()+1;
    let ano = data.getFullYear(); 

    //Verificação de input vazio!
    if(this.consumo.ingestaoAnimal == null || this.consumo.pesoMedioAnimal == null ||
      this.consumo.numeroAnimais == null || this.consumo.perdaPastejo == null ||
      this.consumo.estacionalidade == null) {
      this.inputVazio();
      return;
    }

    //Verificação de número fora do padrão!
    if(this.consumo.estacionalidade > 0.2 || this.consumo.estacionalidade < 0.1) {
        this.alertaEstacionalidade();
        return;
    }

    //Verificação de número fora do padrão!
    if(this.consumo.perdaPastejo > 0.3 || this.consumo.perdaPastejo < 0.0) {
      this.alertaPerdaDePastejo();
      return;
    }

    //Cálculo de consumo animal
    consumoAnimal = (this.consumo.ingestaoAnimal * (this.consumo.pesoMedioAnimal * this.consumo.numeroAnimais))/100;
    document.getElementById('resultadoConsumoAnimal').innerHTML = consumoAnimal.toFixed(0) + ' kg por dia';
   
    //Cálculo de matéria seca por hectare
    msPorHec = (consumoAnimal * 180)/(1 - this.consumo.perdaPastejo);
    document.getElementById('resultadoMsPorHec').innerHTML = msPorHec.toFixed(0) + ' Kg de MS por ano';
    
    //Cálculo de máteria seca por hectare por ano
    msPorHecPorAno = msPorHec / (1 - this.consumo.estacionalidade);
    document.getElementById('resultadoMsPorHecPorAno').innerHTML = msPorHecPorAno.toFixed(0) + ' Kg por ano por hec';

    //Concatenação da data
    this.consumo.dataCompleta = dia.toString().concat('/').concat(mes.toString()).concat('/').concat(ano.toString());
    
    this.consumo.resultadoConsumoAnimal = consumoAnimal.toFixed(0); //Atribuição do resultado de consumo animal
    this.consumo.resultadoMsHec = msPorHec.toFixed(0); //Atribuição do resultado de matéria seca por hectare
    this.consumo.resultadoMsAnoHec = msPorHecPorAno.toFixed(0); //Atribuição do resultado de máteria seca por hectare por ano
    this.piqueteDao.salvarConsumoAnimal(this.consumo); //Inserção no local storage.
  }
  
  limparInputs(): void {
    this.ingestaoAnimal = null;
    this.pesoMedioAnimal = null;
    this.numeroAnimais = null;
    this.perdaPastejo = null;
    this.estacionalidade = null;

    document.getElementById('resultadoConsumoAnimal').innerHTML = "0";
    document.getElementById('resultadoMsPorHec').innerHTML = "0";
    document.getElementById('resultadoMsPorHecPorAno').innerHTML = "0";
  }

}
